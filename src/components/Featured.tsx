import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

interface Feature {
  imgSrc: string;
  title: string;
  year: string;
  category: string;
  description: string;
}

const features: Feature[] = [
  {
    imgSrc: feature1,
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    imgSrc: feature2,
    title: "Vibrant Portraits of 2020",
    year: "2020",
    category: "Illustration",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    imgSrc: feature3,
    title: "36 Days of Malayalam type",
    year: "2020",
    category: "Typography",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  }
];

const FeatureItem = ({ imgSrc, title, year, category, description }: Feature) => (
  <>
    <div className="p-[18px] md:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-4">
      <div>
        <img src={imgSrc} alt={title} className="mx-auto w-full" />
      </div>
      <div className="col-span-2">
        <h1 className="text-dark text-[30px] font-bold py-3 md:py-0">
          {title}
        </h1>
        <div className="flex gap-8 pb-4 md:pb-7">
          <h1 className="bg-dark lg:text-[20px] rounded-full px-2 text-[#ffffff]">
            {year}
          </h1>
          <h1 className="text-light lg:text-[20px]">
            {category}
          </h1>
        </div>
        <p className="text-dark text-[16px] font-normal">
          {description}
        </p>
      </div>
    </div>
    <div className="bg-[#E0E0E0] mt-4 h-[1px]"></div>
  </>
);

const Featured = () => {
  return (
    <section className="py-4 lg:px-[120px] sm:px-[45px]">
      <h1 className="text-center text-dark text-[18px] lg:text-[22px] md:text-left">
        Featured works
      </h1>
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          imgSrc={feature.imgSrc}
          title={feature.title}
          year={feature.year}
          category={feature.category}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default Featured;
