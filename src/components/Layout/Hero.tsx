import Button from "../ui/Button";
import avatar from "../../../public/assets/avatar.png";
const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2   lg:px-[120px] lg:pt-12">
      {/* Mobile Avatar */}
      <div className="sm:hidden  flex items-center justify-center py-[33px] ">
        <img src={avatar} alt="user picture" className="w-[180px]" />
      </div>
      {/* Text Content */}
      <div>
        <div>
          <h1 className="md:px-[45px] lg:px-0 sm:text-[40px] text-[32px] md:block font-bold text-center lg:text-left md:text-left text-dark">
            Hi, I am John, <br /> Creative Technologist
          </h1>
        </div>
        <div className="px-[22px] md:px-[45px] lg:px-0  ">
          <p className="text-center lg:text-left md:text-left lg:pb-[38px] lg:pt-[18px] text-dark py-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex items-center justify-center lg:justify-start md:justify-start pb-[58px]">
            <Button variant="primary" size="large">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      {/* Desktop Avatar */}
      <div className="sm:hidden hidden md:block  ">
        <div className="flex items-center justify-end md:justify-center pb-[33px]">
          <img src={avatar} alt="user picture" className="w-[255px]" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
