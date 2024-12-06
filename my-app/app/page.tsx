import { ArrowLeft, ArrowRight } from "lucide-react";
import OptionCarousel from "./myComponents/optionCarousel";
import ProductSection from "./myComponents/productSection";
import { AccordionDemo } from "./myComponents/CategoryAccordion";

export default function Home() {
  return (
    <div>
      {/* Option Carousel */}
      <AccordionDemo/>
      <OptionCarousel />

      {/* Product Section */}
      <ProductSection
        heading="Flash Sales"
        subHeading="Today's"
        showTime={true} // Show the timer section
        action={
          <div className="flex gap-2 justify-center md:justify-start">
            {/* Left Arrow Button */}
            <button className="flex items-center justify-center bg-[#F5F5F5] rounded-full h-[46px] w-[46px] p-2 hover:bg-gray-200">
              <ArrowLeft className="h-[24px] w-[24px]" />
            </button>
            {/* Right Arrow Button */}
            <button className="flex items-center justify-center bg-[#F5F5F5] rounded-full h-[46px] w-[46px] p-2 hover:bg-gray-200">
              <ArrowRight className="h-[24px] w-[24px]" />
            </button>
          </div>
        }
        product={[]} // Pass your product list or keep as an empty array for now
        isCarousal={false} // Disable carousel behavior
      />
    </div>
  );
}
