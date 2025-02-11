import { FeatureCardType } from "@/types";
import { SubtractFigure } from "../icons/SubtractFigure";

const FeatureCard = (props: FeatureCardType) => (
  <div className="how-to-play-card">
    <div className="flex flex-col flex-grow">
      <p className="text-[15px] md:text-lg text-white mt-2 mb-0 text-center font-semibold">
        {props.title}
      </p>
      <p className="text-[10px] md:text-xs text-[#E7E7E7] text-center">
        {props.description}
      </p>
    </div>
    <div className="absolute bottom-0 left-0 w-full">
      <div className="w-full">
        <SubtractFigure />
      </div>
    </div>
  </div>
);

export default FeatureCard;
