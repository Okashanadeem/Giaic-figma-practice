import React from 'react';
import SectionHeader from './sectionHeader';
import Time from './timer'; // Ensure your `Time` component is correctly imported

interface product {
  name: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductSectionProps {
  heading: string;
  subHeading: string;
  showTime: boolean;
  action: React.ReactNode;
  product: product[];
  isCarousal: boolean;
  ctaText?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  heading,
  subHeading,
  showTime,
  action,
}) => {
  return (
    <div className="space-y-6 mt-14 flex flex-col justify-center items-center md:items-start">
      {/* Main Container with Flexbox for Section Header and Timer */}
      <div className="gap-8 flex flex-wrap justify-center md:justify-start md:gap-[87px] w-full">
        {/* Section Header */}
        <SectionHeader heading={heading} subHeading={subHeading} />

        {/* Time Display (only if showTime is true) */}
        {showTime && <Time targetTime={3 * 24 * 60 * 60} />}
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-6 md:mt-0 md:ml-[470px] w-full">
        {action}
      </div>
    </div>
  );
};

export default ProductSection;
