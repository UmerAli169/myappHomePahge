import React from 'react';
import FeatureCard from '../../../components/featureCard/FeatureCard';
import featuresData from './data.json';

const FeaturesSection = () => {
  return (
    <section className='py-12'>
      <p className=' lg:text-[54px] text-[46px] lg:leading-[66px] leading-[46px]  text-[#2E2F35] lg:font-bold  font-medium  text-center '>
        Everything your brand needs to
        <br />
        <span className='text-[#009387] lg:text-[50px] text-[50px] font-normal  font-Covered By Your Grace'>
          make your brand unforgettable{' '}
        </span>
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-20  h-[1058px] w-full'>
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
            iconWidth={feature.iconWidth}
            iconHeight={feature.iconWidth}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
