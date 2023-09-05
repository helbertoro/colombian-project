export const Footer = () => {
  const getYear = () => new Date().getFullYear();

  return (
    <div className="bg-secondary">
      <div className="container">
        <div className="flex items-center justify-between">
          <ul className="flex">
            <li>
              <a className="btn btn-secondary btn-sm m-1" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="btn btn-secondary btn-sm m-1" href="#">
                Birding tours
              </a>
            </li>
            <li>
              <a className="btn btn-secondary btn-sm m-1" href="#">
                Why Colombia
              </a>
            </li>
          </ul>
          <span className="text-accent">
            © {getYear()} - The Colombian Project. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};
