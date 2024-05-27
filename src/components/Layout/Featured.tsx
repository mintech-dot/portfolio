import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import FeatureItem from "../ui/FeatureItem"; // Adjust the import path as necessary

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
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    imgSrc: feature2,
    title: "Vibrant Portraits of 2020",
    year: "2020",
    category: "Illustration",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    imgSrc: feature3,
    title: "36 Days of Malayalam type",
    year: "2020",
    category: "Typography",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

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
