import { Layout, WhyBook } from "@/components/shared";

export const FamilyHolidays = () => {
  return (
    <Layout>
      <div className="h-96 bg-neutral text-accent">Banner 1</div>
      <div className="container my-20">
        <p>Hola</p>
        <WhyBook section="FamilyHolidays" />
      </div>
      <div className="h-96 bg-neutral text-accent">Banner 2</div>
    </Layout>
  );
};
