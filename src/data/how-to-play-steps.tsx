import { PredictIcon } from "@/components/icons/PredictIcon";
import { QuizesIcon } from "@/components/icons/QuizesIcon";
import { RewardIcon } from "@/components/icons/RewardIcon";
import { HowToPlayStep } from "../types";
import { DownloadIcon } from "@/components/icons/DownloadIcon";
const howToPlaySteps: HowToPlayStep[] = [
  {
    icon: <DownloadIcon />,
    title: "Download the App",
    description:
      "Get started by downloading the Cricket Predictor app from the App Store or Google Play.",
  },
  {
    icon: <PredictIcon />,
    title: "Make Your Predictions",
    description:
      "Answer simple prediction questions like 'Who will win?' or 'Total runs scored?'",
  },
  {
    icon: <QuizesIcon />,
    title: "Take Quizzes",
    description: "Participate in daily quizzes.",
  },
  {
    icon: <RewardIcon />,
    title: "Win from ₹1 Crore",
    description:
      "Score the most points and win your share of the $100,000 USD prize pool!",
  },
];

export default howToPlaySteps;
