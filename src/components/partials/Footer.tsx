import X from "../../../public/assets/X.svg";
import Linkedin from "../../../public/assets/Linkedin.svg";
import fb from "../../../public/assets/fb.svg";
import insta from "../../../public/assets/insta.svg";

const Footer = () => {
  return (
    <footer className="pt-[51px] mt-[150px] pb-[44px]">
      <div className="flex gap-8 items-center justify-center">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="facebook icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="instagram icon" />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <img src={X} alt="X icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="Linkedin icon" />
        </a>
      </div>
      <h1 className="text-center py-4 text-[14px] text-dark">
        Copyright ©2024 All rights reserved{" "}
      </h1>
    </footer>
  );
};

export default Footer;
