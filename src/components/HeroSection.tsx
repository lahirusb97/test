import { FC } from "react";
import { Link } from "react-router-dom";

const HeroSection: FC = () => {
  return (
    <div className="bg-[#675BAB] font-lora">
      <style>
        {`
          @keyframes slide {
            0%, 16.67%, 100% { opacity: 1; }
            16.68%, 33.33% { opacity: 0; }            
            33.34%, 50% { opacity: 1; }
            50.01%, 66.67% { opacity: 0; }
            66.68%, 83.33% { opacity: 1; }
            83.34%, 100% { opacity: 0; }
          }

          .animate-slide {
            animation: slide 30s infinite;
          }

          .animate-slide.delay-6000 {
            animation-delay: 6s;
          }

          .animate-slide.delay-12000 {
            animation-delay: 12s;
          }

          .animate-slide.delay-18000 {
            animation-delay: 18s;
          }

          .animate-slide.delay-24000 {
            animation-delay: 24s;
          }
        `}
      </style>

      <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
        <div className="flex items-center justify-center">
          <div className="max-w-[450px] space-y-4 text-center md:text-left">
            <p className="text-black">
              Starting At <span className="font-bold">5.99$</span>
            </p>
            <h2 className="text-black font-bold text-4xl md:text-5xl">
              The best Pet's Toys collection 2024
            </h2>
            <h3 className="text-2xl">
              Exclusive offer <span className="text-red-600">-10%</span> off this week
            </h3>
            <Link
              to="/product/6"
              data-test="hero-btn"
              className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-full overflow-hidden relative">
            <div className="w-full h-full absolute inset-0 animate-slide">
              <img src="/public/im1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full absolute inset-0 animate-slide delay-6000">
              <img src="/public/im2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full absolute inset-0 animate-slide delay-12000">
              <img src="/public/im3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full absolute inset-0 animate-slide delay-18000">
              <img src="/public/im4.jpg" alt="Slide 4" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full absolute inset-0 animate-slide delay-24000">
              <img src="/public/im5.jpg" alt="Slide 5" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



