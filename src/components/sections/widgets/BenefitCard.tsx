import { SubtractFigure } from "../icons/SubtractFigure";
import { BenefitCardType } from "@/types";

const BenefitCard = ({ title, icon }: BenefitCardType) => (
  <div className="benefit-card">
    {/* Centered PNG Icon */}
    <div className="w-24 h-24 md:h-16 md:w-16 flex items-center mb-8 md:mb-10">
      <img
        src={icon}
        alt={title}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>

    {/* Title */}
    <h1 className="text-lg md:text-lg text-white text-center font-semibold">
      {title}
    </h1>

    {/* Decorative Background */}
    <div className="absolute bottom-0 left-0 w-full">
      <SubtractFigure />
    </div>
  </div>
);

export default BenefitCard;
