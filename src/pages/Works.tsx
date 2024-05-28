import FeatureItem from "../components/ui/FeatureItem";
import config from "../config/works.json";

const Works = () => {
  const { features } = config;
  return (
    <section className="py-4 lg:px-[120px] sm:px-[45px]">
      <h1 className="text-[44px] text-dark font-black mx-4 md:mx-0">Works</h1>
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

export default Works;
