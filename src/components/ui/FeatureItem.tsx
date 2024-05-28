import { NavLink } from "react-router-dom";
interface Feature {
  imgSrc: string;
  link: string;
  title: string;
  year: string;
  category: string;
  description: string;
}

const FeatureItem = ({
  imgSrc,
  title,
  year,
  category,
  description,
  link,
}: Feature) => (
  <>
    <div className="p-[18px] md:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-4">
      <div>
        <img src={imgSrc} alt={title} className="mx-auto w-full" />
      </div>
      <div className="col-span-2">
        <h1 className="text-dark text-[30px] font-bold py-3 md:py-0 hover:text-primary">
          <NavLink to={link}>{title}</NavLink>{" "}
        </h1>
        <div className="flex gap-8 pb-4 md:pb-7">
          <h1 className="bg-dark lg:text-[20px] rounded-full px-2 text-[#ffffff]">
            {year}
          </h1>
          <h1 className="text-light lg:text-[20px]">{category}</h1>
        </div>
        <p className="text-dark text-[16px] font-normal">{description}</p>
      </div>
    </div>
    <div className="bg-[#E0E0E0] mt-4 h-[1px]"></div>
  </>
);

export default FeatureItem;
