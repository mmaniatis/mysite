// components/PromisePage.tsx

const PromisePage: React.FC = () => {
  return (
    <main className="flex flex-col font-sans font-black text-blue-900 gap-5 text-2xl">
      <div className="flex flex-col min-h-80 mt-10 items-center justify-center">
        <p className="w-1/2">
          We are proud to only support U.S workers. We believe in a high quality product made
          here in the United States.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-80 bg-white">
        <p className="w-1/2">
          Software development is a craft and a service. We believe the customer is always right
          and will relentlessly work to achieve exactly what you want.
        </p>

      </div>

      <div className="flex flex-col items-center justify-center min-h-80">

        <p className="w-1/2">
          We only employ engineers
          who can both build premium grade software and effectively communicate.
        </p>
      </div>
    </main>
  );
};

export default PromisePage;