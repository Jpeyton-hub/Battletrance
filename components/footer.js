import Image from "next/image";

const Footer = () => {
  return (
    <footer className="">
      <p className="">&#169; 2021 James W Development</p>
      <div className="">
        <Image className="" src="/images/devlogo.png" width={45} height={45} />
      </div>
    </footer>
  );
};

export default Footer;
