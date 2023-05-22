import ServiceItem from "../../components/Services/ServiceItem/ServiceItem";
import {Body, Face} from "../../assets";
import {createSearchParams} from "react-router-dom";

const ServiceCategoryPage = () => {
  return (
    <div className="services-category">
      <ServiceItem
        data_aos="fade-right"
        url={{
          pathname: "/services/category",
          search: createSearchParams({
            name: "body",
          }).toString(),
        }}
        img={Body}
      />
      <ServiceItem
        data_aos="fade-left"
        url={{
          pathname: "/services/category",
          search: createSearchParams({
            name: "face",
          }).toString(),
        }}
        img={Face}
      />
    </div>
  );
};

export default ServiceCategoryPage;
