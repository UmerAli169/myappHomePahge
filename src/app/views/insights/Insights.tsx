import Image from 'next/image';
import insightsData from './data.json'


const Insights = () => {
  return (
    <section className="py-16 px-6 lg:px-24 bg-white">
      <h2 className="text-4xl font-bold text-center">
        Latest trends <span className="text-green-600 italic">& insights</span>
      </h2>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {insightsData.map((item) => (
          <div key={item.id} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <Image src={item.image} alt={item.title} width={400} height={250} className="w-full h-auto" />
            <div className="p-4">
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
