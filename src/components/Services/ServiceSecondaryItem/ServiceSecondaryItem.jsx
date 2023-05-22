import {Link} from "react-router-dom";
import "./ServiceSecondaryItem.css";
import propTypes from "prop-types";

const ServiceSecondaryItem = ({data}) => {
  const {name, price, img} = data;

  return (
    <div className="service-secondary-item">
      <div className="service-secondary-item-img">
        <img src={img} alt="service-secondary-item" />
      </div>
      <h3>{name}</h3>
      <div className="service-secondary-footer">
        <span>{price} vnd</span>
        <Link to="/" className="service-secondary-button">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

ServiceSecondaryItem.propTypes = {
  data: propTypes.object,
};

export default ServiceSecondaryItem;
