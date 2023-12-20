import React from "react";

interface TitleSectionProps {
  title1: string;
  title2: string;
  className?: string;
}
const TitleSection: React.FC<TitleSectionProps> = ({
  title1,
  title2,
  className,
}) => {
  return (
    <h2
      className={`text-title uppercase tablet:text-titleTb tablet:leading-none desktop:text-titleDt desktop:leading-tight ${className}`}
    >
      <span className="font-thin">{title1} </span>
      {title2}
    </h2>
  );
};

export default TitleSection;
