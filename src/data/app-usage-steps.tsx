import { DownloadIcon } from "@/components/icons/DownloadIcon";
import { PredictIcon } from "@/components/icons/PredictIcon";
import { QuizesIcon } from "@/components/icons/QuizesIcon";
import { RewardIcon } from "@/components/icons/RewardIcon";
import { AppUsageSteps } from "../types";

const steps: AppUsageSteps[] = [
  {
    id: 1,
    title: "Download the App",
    icon: <DownloadIcon />,
    description:
      "Get started by downloading the Cricket Predictor app from the App Store or Google Play.",
  },
  {
    id: 2,
    title: "Make Your Predictions",
    icon: <PredictIcon />,
    description:
      "Answer simple prediction questions like, Who will win? or Total runs scored?",
  },
  {
    id: 3,
    title: "Take Quizzes",
    icon: <QuizesIcon />,
    description: "Participate in daily quizzes.",
  },
  {
    id: 4,
    title: "Win from ₹1 Crore",
    icon: <RewardIcon />,
    description:
      "Score the most points and win your share of the $100,000 USD prize pool!",
  },
];

export default steps;
