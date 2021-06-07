import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className='row align-items-center'>
        <div className='col-4'></div>
        <div className="col-1">
          <Image
            className="float-end"
            src="/images/devlogo.png"
            width={45}
            height={45}
          />
        </div>
        <p className="col-4">&#169; 2021 James W Development</p>
        <div className='col-3'></div>
      </div>
    </footer>
  );
};

export default Footer;
