import {Link} from "react-router-dom";
import "./ServiceItem.css";
import propTypes from "prop-types";

const ServiceItem = ({url, img, data_aos}) => {
  return (
    <Link to={url} className="card-service" data-aos={data_aos}>
      <img src={img} alt="service" />
    </Link>
  );
};

ServiceItem.propTypes = {
  url: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  data_aos: propTypes.string.isRequired,
};

export default ServiceItem;
