import {createSearchParams} from "react-router-dom";
import {About, Body, Face} from "../../assets";
import ServiceItem from "../../components/Services/ServiceItem/ServiceItem";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <section className="section-banner-home overlay">
        <div className="container">
          <div className="title-slogan" data-aos="fade-right">
            <h1>Sen Spa</h1>
            <div>
              Không gian sang trọng <br /> hòa lẫn hiện đại và cổ điển
            </div>
          </div>
        </div>
      </section>
      <section className="section-about">
        <div className="container">
          <div className="about-content" data-aos="fade-right">
            <h2>Về Sen Spa</h2>
            <p>
              Gắn liền với vẻ đẹp của một loài hoa giản dị, chân chất, lãng mạn
              nhưng ý chí sống mãnh liệt, Sen Spa được thiết kế và bài trí với
              phong cách mộc mạc, giản dị mang đậm tính chất truyền thống của
              Việt Nam.
            </p>
            <p>
              Tọa lạc tại trung tâm TP.Đà Nẵng nhưng Sen Spa được tách biệt khỏi
              không khí ồn ào náo nhiệt , mở ra một không gian an tĩnh, nhẹ
              nhàng.
            </p>
            <button>xem thêm</button>
          </div>
          <div className="about-img" data-aos="fade-left">
            <img src={About} alt="about-image" />
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
          <div className="services-category">
            <ServiceItem
              url={{
                pathname: "/services/category",
                search: createSearchParams({
                  name: "body",
                }).toString(),
              }}
              img={Body}
              data_aos="fade-right"
            />
            <ServiceItem
              url={{
                pathname: "/services/category",
                search: createSearchParams({
                  name: "face",
                }).toString(),
              }}
              data_aos="fade-left"
              img={Face}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
