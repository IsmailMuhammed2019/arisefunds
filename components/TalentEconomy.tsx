import AnimatedWrapper from "./AnimatedWrapper";
import { ParallaxImage } from "./AdvancedEffects";

interface TalentSectionProps {
  imageSrc: string;
  imageAlt: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  reverse?: boolean;
}

const TalentSection: React.FC<TalentSectionProps> = ({
  imageSrc,
  imageAlt,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Container */}
      <div className="relative w-full max-w-[672px] aspect-[672/332] rounded-[32px] overflow-hidden shrink-0">
        <ParallaxImage
          src={imageSrc}
          alt={imageAlt}
          className="aspect-[672/332]"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-6 w-full max-w-[624px]">
        <h2 className="text-white leading-tight tracking-tight font-poppins">
          <span className="text-4xl md:text-[41px] font-bold">
            {titlePrefix}{" "}
          </span>
          <span className="text-4xl md:text-[41px] font-medium text-[#26C6FF]">
            {titleHighlight}
          </span>
          <span className="text-4xl md:text-[41px] font-medium">
            {" "}
            {titleSuffix}
          </span>
        </h2>
        <p className="text-base md:text-[18px] font-light font-roboto leading-[1.67] text-[#D0D0D0]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function TalentEconomy() {
  const sections = [
    {
      imageSrc: "/flywheel.png",
      imageAlt: "Team hands joined together in the center",
      titlePrefix: "7-Stage",
      titleHighlight: "Talent Economy",
      titleSuffix: "Flywheel",
      description:
        "7-Stage Talent Economy Flywheel describes AriseFunds’ end-to-end, self-reinforcing system for developing and sustaining a skilled workforce pipeline.",
      reverse: false,
    },
    {
      imageSrc: "/map-footprint.png", // Replace with your actual image path
      imageAlt: "World map showing African market footprint",
      titlePrefix: "8 Countries —",
      titleHighlight: "Current Footprint",
      titleSuffix: "",
      description:
        "8 Countries — Current Footprint highlights AriseFunds’ active presence across multiple African markets, reflecting its growing regional impact in education financing and job placement.",
      reverse: true,
    },
  ];

  return (
    <section className="bg-[#00172B] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[94px]">
        {sections.map((section, index) => (
          <AnimatedWrapper
            key={index}
            type={section.reverse ? "slide-in" : "fade-up"}
            delay={0.2}
          >
            <TalentSection {...section} />
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
}
