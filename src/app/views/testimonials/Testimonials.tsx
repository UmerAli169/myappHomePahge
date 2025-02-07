import Button from "@/components/navbar/Button";
import testimonialsData from "./data.json";
import TestimonialCard from "@/components/testimonials/Testimonials";
const Testimonials: React.FC = () => {
    return (
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            PostPilot is <span className="text-orange-500">🔥</span> for DTC
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                username={testimonial.username}
                content={testimonial.content}
              />
            ))}
          </div>
          
          <div className="mt-12">
            <Button 
              text="TRY IT RISK-FREE" 
              className="px-8 py-4 bg-[#FF6D2C] text-white text-lg hover:bg-orange-600 transition-colors"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;