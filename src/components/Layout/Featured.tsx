import FeatureItem from "../ui/FeatureItem"; // Adjust the import path as necessary
import config from "../../config/works.json";

const Featured = () => {
  const { features } = config;
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
