// components/PromisePage.tsx
const PromisePage: React.FC = () => {
  return (
    <main className="flex flex-row flex-wrap h-screen md:rounded-full font-sans  mt-1 font-black text-blue-900 gap-2 text-sm md:text-xl bg-[url('/flags-rally.jpg')] bg-cover bg-centers items-center justify-center">
      <div className="flex bg-[#f7faff] shadow-2xl h-1/4 md:h-1/3 rounded-xl w-11/12 md:w-1/3 items-center justify-center ">
        <p className="w-1/2">
          We only employ engineers
          who can both build premium grade software and effectively communicate.
        </p>
      </div>  

      <div className="flex bg-[#f7faff] shadow-2xl h-1/4 md:h-1/3 rounded-xl w-11/12 md:w-1/3 items-center justify-center">
        <p className="w-1/2">
          We are proud to only support U.S workers. We believe in a high quality product made
          here in the United States.
        </p>

      </div>  

      <div className="flex bg-[#f7faff] shadow-2xl h-1/4 md:h-1/3 rounded-xl w-11/12 md:w-1/3 items-center justify-center">

        <p className="w-1/2">
          We believe the customer is always right and will relentlessly work to achieve exactly what you want.
        </p>

      </div>  

      
    </main>
  );
};

export default PromisePage;