import { useFetch } from "@/hooks/useFetch";
import { CareerDescription } from "@/entities/types";

const CareerDescription = () => {
  const { data } = useFetch("career") as { data: CareerDescription[] };
  if (data === null) {
    return <div>No data available</div>;
  }

  return (
    <ul className="w-[180px] tablet:w-[225px] desktop:w-[560px]">
      {data.map(({ _id, title, description }) => (
        <li
          key={_id}
          className="mb-4 text-right tablet:mb-6 desktop:flex desktop:gap-6 desktop:justify-end"
        >
          <h4 className="text-subTitle mb-2 tablet:text-[16px] desktop:text-[18px]">
            {title}
          </h4>
          <p className="text-text text-xs leading-5 desktop:w-[285px] desktop:text-left desktop:leading-6 ">
            {description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CareerDescription;
