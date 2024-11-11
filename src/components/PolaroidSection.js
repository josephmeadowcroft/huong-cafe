import Image from "next/image";
import PopButton from "./PopButton";
import Emoji from "./Emoji";

const WelcomeSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h3 className="text-3xl font-bold mb-4 text-black">
            Open Now
            <Emoji symbol="🎉" className="pl-2" />
          </h3>
          <p className="text-foreground mb-6">
            We're excited to announce that our Vietnamese café is now open! We
            cannot wait to bring our Vietnamese cuisine to you, so whether
            you're just stopping by or settling in for a relaxing meal, we look
            forward to serving you and becoming part of your community.
          </p>
          <div className="z-0">
            <PopButton
              title="View menu"
              btnStyles="bg-black"
              textStyles="text-white"
              href="/menu"
            />
          </div>
        </div>

        {/* Images Container */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-row gap-8 md:gap-4 lg:gap-0 items-center justify-center">
            {/* First Image */}
            <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[300px] md:h-[200px] lg:w-[350px] lg:h-[250px] transform -rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-105">
              <Image
                src="/huong-polaroid-1.png"
                alt="Polaroid Image 1"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                draggable={false}
              />
            </div>

            {/* Second Image */}
            <div className="relative lg:mr-8 w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[300px] md:h-[200px] lg:w-[350px] lg:h-[250px] transform rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
              <Image
                src="/huong-polaroid-2.png"
                alt="Polaroid Image 2"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
