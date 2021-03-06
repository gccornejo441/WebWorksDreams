import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin, FaInstagram, FaInstagramSquare } from "react-icons/fa";

const Logo = (props) => {
  if (props.name == "facebook") {
    return <FaFacebookF className="text-white text-lg mr-1" />;
  } else if (props.name == "twitter") {
    return <FaTwitter className="text-white text-lg mr-1" />;
  } else if (props.name == "youtube") {
    return <FaYoutube className="text-white text-lg mr-1" />;
  } else if (props.name == "linkedin") {
    return <FaLinkedin className="text-white text-lg mr-1" />;
  } else {
    return <FaInstagramSquare className="text-white text-lg mr-1" />;
  }
};

export default Logo;
