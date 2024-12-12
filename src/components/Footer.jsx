import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Prescripto offers you all your medical needs at one place. Simply
            search for the doctor you nedd and book an appointment. We have the
            best qualified doctors in the whole country which are available to
            you{" "}
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact US</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+090078601</li>
            <li>sameershykh16@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 Mojojojo - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
