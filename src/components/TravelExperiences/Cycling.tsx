import { Layout, WhyBook } from "@/components/shared";

export const Cycling = () => {
  return (
    <Layout>
      <div className="h-96 bg-neutral text-accent">Banner 1</div>
      <div className="container my-20">
        <p>Hola</p>
        <WhyBook section="Cycling" />
      </div>
      <div className="h-96 bg-neutral text-accent">Banner 2</div>
    </Layout>
  );
};
