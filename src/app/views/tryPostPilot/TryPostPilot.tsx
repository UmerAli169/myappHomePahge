import Image from 'next/image';

const TryPostPilot = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#FF6D2C] px-6 lg:px-24 py-16">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
        <h2 className="text-4xl lg:text-5xl font-bold">Try PostPilot Risk-Free</h2>
        <p className="mt-4 text-lg">No contracts. No commitments. Guaranteed results.*</p>

        {/* Button & Rating */}
        <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-start gap-4">
          <button className="px-6 py-3 border border-black text-black font-medium text-lg rounded-lg bg-white hover:bg-gray-200">
            GET STARTED
          </button>

          <div className="flex flex-col items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <img key={star} src="/svgs/star.svg" className="w-5 h-5" alt="Star" />
              ))}
            </div>
            <span className="text-lg">5.0 Shopify Rating</span>
          </div>
        </div>

        {/* Small Note */}
        <p className="mt-2 text-sm opacity-75">*For qualified brands with over $1m annual Shopify revenue.</p>
      </div>

      {/* Right Side - Hand Holding Card */}
      <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
        <Image src="/images/hand-holding-card.png" alt="Hand Holding PostPilot Card" width={400} height={300} />
      </div>
    </div>
  );
};

export default TryPostPilot;
