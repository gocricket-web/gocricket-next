import { SubtractFigure } from "../icons/SubtractFigure";
import { BenefitCardType } from "@/types";
import Image from "next/image";

const BenefitCard = ({ title, icon }: BenefitCardType) => (
  <div className="benefit-card relative group transition-all duration-300 ease-in-out hover:h-[230px] hover:brightness-125">
    <div className="w-24 h-24 md:w-24 md:h-24 flex items-center mb-6 md:mb-8 transition-transform duration-500 ease-in-out group-hover:-translate-y-3">
      <Image
        src={icon}
        alt={title}
        className="w-full h-full object-contain"
        loading="lazy"
        width={100}
        height={100}
      />
    </div>

    <h1 className="text-base md:text-lg text-white text-center font-semibold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
      {title}
    </h1>

    <div className="absolute bottom-0 left-0 w-full opacity-80">
      <SubtractFigure />
    </div>
  </div>
);

export default BenefitCard;
