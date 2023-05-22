import {Outlet} from "react-router-dom";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <>
      <section className="section-banner-services overlay">
        <div className="container">
          <div className="title-slogan" data-aos="fade-right">
            <h1>Các dịch vụ của Sen Spa</h1>
            <div>
              Không gian sang trọng <br /> hòa lẫn hiện đại và cổ điển
            </div>
          </div>
        </div>
      </section>
      <section className="section-services">
        <div className="container">
          <div className="title" data-aos="fade-up">
            <h2>Dịch vụ</h2>
            <p>
              Trải nghiệm không gian tinh tế <br /> thư giãn với những dịch vụ
              cao cấp tại Sen Spa
            </p>
          </div>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
