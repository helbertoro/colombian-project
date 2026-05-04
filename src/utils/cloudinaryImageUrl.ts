import cloudinaryData from "../../docs/cloudinaty_images.json";

type Resource = (typeof cloudinaryData.resources)[number];

const resources = cloudinaryData.resources as Resource[];

export type CloudinaryImageOptions = {
  /** Substring that must appear in Cloudinary `asset_folder` */
  assetFolderIncludes?: string;
  /** If set, exclude resources whose `asset_folder` contains any of these substrings */
  assetFolderExcludes?: string[];
};

function basenameFromFilename(name: string): string {
  const i = name.lastIndexOf(".");
  return i === -1 ? name : name.slice(0, i);
}

function variantsForBasename(basename: string): string[] {
  const nfc = basename.normalize("NFC");
  const nfd = basename.normalize("NFD");
  const raw = [basename, nfc, nfd];
  return raw.filter((v, i) => raw.indexOf(v) === i);
}

function matchesBasename(publicId: string, base: string): boolean {
  return publicId === base || publicId.startsWith(base + "_");
}

function findMatches(basename: string): Resource[] {
  const out: Resource[] = [];
  for (const v of variantsForBasename(basename)) {
    for (const r of resources) {
      if (matchesBasename(r.public_id, v)) {
        out.push(r);
      }
    }
  }
  return out;
}

function dedupeResources(list: Resource[]): Resource[] {
  const seen = new Set<string>();
  return list.filter((r) => {
    if (seen.has(r.public_id)) return false;
    seen.add(r.public_id);
    return true;
  });
}

function pickResource(
  matches: Resource[],
  opts?: CloudinaryImageOptions,
): Resource | null {
  let m = dedupeResources(matches);
  if (opts?.assetFolderIncludes) {
    m = m.filter((r) => r.asset_folder.includes(opts.assetFolderIncludes!));
  }
  if (opts?.assetFolderExcludes?.length) {
    m = m.filter(
      (r) =>
        !opts.assetFolderExcludes!.some((ex) => r.asset_folder.includes(ex)),
    );
  }
  if (m.length === 0) return null;
  m.sort((a, b) => a.public_id.length - b.public_id.length);
  return m[0];
}

/**
 * Resolve a filename (e.g. `photo.jpeg`) or basename to a Cloudinary `secure_url`.
 * When multiple assets share the same basename, pass `assetFolderIncludes` / `assetFolderExcludes`
 * to match the original `ext-images/...` layout.
 */
export function cloudinaryImageUrl(
  filenameOrBasename: string,
  opts?: CloudinaryImageOptions,
): string {
  const base = basenameFromFilename(filenameOrBasename);
  const matches = findMatches(base);
  const picked = pickResource(matches, opts);
  if (!picked) {
    throw new Error(
      `cloudinaryImageUrl: no asset for "${filenameOrBasename}" (basename "${base}")`,
    );
  }
  return picked.secure_url;
}
