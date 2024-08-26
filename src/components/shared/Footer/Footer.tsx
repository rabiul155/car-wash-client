import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" text-gray-600 bg-[#f6f7fb]">
      <hr className=" h-1 " />
      <div className="grid grid-cols-1 lg:grid-cols-4 px-8 py-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Support</h3>
          <p className=" mb-8">
            685 Market Street,
            <br />
            Las Vegas, LA 95820,
            <br />
            United States.
          </p>
          <ul>
            <li className=" my-3">example@domain.com</li>
            <li className=" my-3">(+01) 850-315-5862</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Account</h3>
          <ul>
            <li className=" my-3">My Account </li>
            <li className=" my-3">LogIn/Register </li>
            <li className=" my-3">Cart </li>
            <li className=" my-3">Wishlist </li>
            <li className=" my-3">Shop </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Quick Link</h3>
          <ul>
            <li className=" my-3">Privacy Policy </li>
            <li className=" my-3">Terms and Services </li>
            <li className=" my-3">FAQ </li>
            <li className=" my-3">Contact </li>
            <li className=" my-3">Services </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Download App</h3>
          <p className="mb-4">Save $3 With App & New User only</p>
          <p className="mb-12">Available in Play Store and App Store</p>
        </div>
      </div>
      <hr className=" h-1 " />
      <div className=" sm:flex justify-between px-8 py-5">
        <div className=" my-6 sm:my-0">
          <div className=" flex gap-1">
            <div className=" p-2 pl-0 rounded-full duration-500">
              <FaFacebookF></FaFacebookF>
            </div>
            <div className=" p-2  rounded-full duration-500">
              <FaLinkedinIn size={18}></FaLinkedinIn>
            </div>
            <div className=" p-2  rounded-full duration-500">
              <FaInstagram size={18}></FaInstagram>
            </div>
            <div className=" p-2  rounded-full duration-500">
              <FaTwitter size={18}></FaTwitter>
            </div>
            <div className=" p-2  rounded-full duration-500">
              <FaDiscord size={18}></FaDiscord>
            </div>
          </div>
        </div>
        <div className=" my-6 sm:my-0">
          <p className=" mx-auto">
            {' '}
            © 2024. All rights reserved by Car Doctor.
          </p>
        </div>
        <div className=" my-6 sm:my-0">
          <div className=" flex gap-6">
            <span>Accept for visa card</span>
            <div className=" flex gap-3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
