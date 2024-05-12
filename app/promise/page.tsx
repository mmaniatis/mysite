import TextBox from "../ui/TextBox";

// components/PromisePage.tsx
const PromisePage: React.FC = () => {
  return (
    <main className="flex flex-row flex-wrap h-screen md:rounded-full font-sans  mt-1 font-black text-blue-900 gap-2 text-sm md:text-xl bg-[url('/flags-rally.jpg')] bg-cover bg-centers items-center justify-center">
      <TextBox header="Giving Back" text="We donate 10% of all proceeds to local first responders and veteran organizations." /> 
      <TextBox header="No Outsourcing" text="We believe in a high quality product made here in the United States." />
      <TextBox header="Excellence" text="We believe the customer is always right and will relentlessly work to achieve exactly what you want." /> 
    </main>
  );
};

export default PromisePage;