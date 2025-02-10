// import steps from "../../utils/data/app-usage-steps";
// import { IconBackground } from "../icons/IconBackground";
// import FeatureCard from "../widgets/FeatureCard";

// const HowToPlayMobile = () => {
//   return (
//     <section id="how-to-play-mobile" className="pt-16 relative">
//       <div className="flex flex-col items-center mb-16">
//         <img
//           src="/images/thought.png"
//           alt="Message Bubble"
//           className="w-24 md:w-20 lg:w-24 mb-6 animate-float"
//           loading="lazy"
//         />
//         <h2 className="text-2xl md:text-4xl font-bold text-center">
//           Why Play at GO Cricket
//         </h2>
//       </div>
//       <div className="px-2 max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-2">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="flex flex-col items-center text-center"
//             >
//               <div className="relative w-full pt-[20px] sm:pt-[30px]">
//                 <div className="absolute left-1/2 -translate-x-1/2 -top-[5px] z-10 flex items-center justify-center">
//                   <div className="absolute">
//                     <IconBackground />
//                   </div>
//                   <div className="relative z-10 scale-[0.5] sm:scale-[0.55] md:scale-[0.65]">
//                     {step.icon}
//                   </div>
//                 </div>
//                 <FeatureCard
//                   title={step.title}
//                   description={step.description}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowToPlayMobile;
