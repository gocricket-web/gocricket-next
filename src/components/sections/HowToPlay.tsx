import howToPlaySteps from "@/data/how-to-play-steps";
import Image from "next/image";

const HowToPlay = () => (
  <section id="how-to-play" className="py-16 px-6 md:px-10 text-white">
    <div className="flex flex-col items-center mb-16">
      <Image
        src="/images/thought.png"
        alt="Message Bubble"
        className="w-16 md:w-20 lg:w-24 mb-6 animate-float"
        loading="lazy"
        width={50}
        height={50}
      />
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Why Play at GO Cricket
      </h2>
    </div>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
      {/* Left - App Preview */}
      <div className="flex justify-center">
        <Image
          src="/images/smartphone_14_pro.webp"
          alt="App Preview"
          className="w-full max-w-md mx-auto"
          loading="lazy"
          width={1000}
          height={1000}
        />
      </div>

      {/* Right - Features List */}
      <div className="flex justify-center">
        <ul className="space-y-6">
          {howToPlaySteps.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#5265D5] rounded-full text-blue-400 p-2.5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 max-w-xs md:max-w-sm">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default HowToPlay;
