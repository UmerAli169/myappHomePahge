import Image from 'next/image';

const CaseStudy = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#F8F8F8] px-6 lg:px-24 py-16">
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div className="absolute top-[-20px] left-4 lg:left-10">
          <Image src="/images/obvi-card-1.png" alt="Obvi Card 1" width={300} height={200} />
        </div>
        <div className="relative z-10">
          <Image src="/images/obvi-card-2.png" alt="Obvi Card 2" width={350} height={250} />
        </div>
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left mt-16 lg:mt-0">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2E2F35]">
          How <span className="text-[#009387]">obvi</span> Drives Profits with Hands-Off Postcard Campaigns
        </h2>
        <p className="mt-4 text-lg text-[#58595D]">
          The 🚀 supplements brand wanted to offset high ad costs and reach dormant customers.
          They scored 1000%+ ROIs.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-6">
          <div className="text-center">
            <p className="text-3xl font-bold">1468%</p>
            <p className="text-gray-600 text-sm">ROI</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">8.59%</p>
            <p className="text-gray-600 text-sm">Conversion Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">$73,457</p>
            <p className="text-gray-600 text-sm">Sales Generated</p>
          </div>
        </div>

        <div className="mt-8">
          <button className="px-6 py-3 border border-gray-900 text-gray-900 font-medium text-lg rounded-lg hover:bg-gray-100">
            READ CASE STUDY
          </button>
        </div>

        {/* Logos */}
        <div className="flex justify-center lg:justify-start gap-6 mt-6 opacity-75">
          <p className="uppercase font-semibold text-gray-500">obvi</p>
          <p className="uppercase font-semibold text-gray-500">BULLETPROOF</p>
          <p className="uppercase font-semibold text-gray-500">BOOM!</p>
          <p className="uppercase font-semibold text-gray-500">orbit baby</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
