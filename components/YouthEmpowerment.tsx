import AnimatedWrapper from "./AnimatedWrapper";
import { ParallaxImage } from "./AdvancedEffects";

interface TargetItemProps {
  imageSrc: string;
  imageAlt: string;
  titleNumber: string;
  titleText: string;
  highlightText: string;
  description: string;
  reverse?: boolean;
}

const TargetItem: React.FC<TargetItemProps> = ({
  imageSrc,
  imageAlt,
  titleNumber,
  titleText,
  highlightText,
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
        <h2 className="text-white leading-tight tracking-tight">
          <span className="text-4xl md:text-[55px] font-bold">
            {titleNumber}{" "}
          </span>
          <span className="text-3xl md:text-[41px] font-medium">
            {titleText}
          </span>{" "}
          <span className="text-3xl md:text-[41px] font-medium text-[#26C6FF]">
            {highlightText}
          </span>
        </h2>
        <p className="text-base md:text-[18px] font-light leading-relaxed text-[#D0D0D0]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function YouthEmpowerment() {
  const targets = [
    {
      imageSrc: "/target-1.png", // Ensure these paths exist in your public folder
      imageAlt: "Young people working in an office setting",
      titleNumber: "50K",
      titleText: "Youth",
      highlightText: "Employment Target",
      description:
        "50K Youth Employment Target is a strategic goal by AriseFunds to empower and place 50,000 young people across Africa into sustainable jobs through a structured pathway of funding, training, and employment support.",
      reverse: false,
    },
    {
      imageSrc: "/target-2.png",
      imageAlt: "Diverse group of young women smiling",
      titleNumber: "50%",
      titleText: "Young Women —",
      highlightText: "Every Cohort",
      description:
        "50% Young Women — Every Cohort reflects AriseFunds' commitment to gender inclusion and equal opportunity, ensuring that at least half of every intake is made up of young women.",
      reverse: true,
    },
  ];

  return (
    <section className="bg-[#00172B] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-24">
        {targets.map((target, index) => (
          <AnimatedWrapper
            key={index}
            type={target.reverse ? "slide-in" : "fade-up"}
            delay={0.2}
          >
            <TargetItem {...target} />
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
}
