import {Link, createSearchParams, useSearchParams} from "react-router-dom";
import {BsMenuButton} from "react-icons/bs";
import ServiceSecondaryItem from "../../components/Services/ServiceSecondaryItem/ServiceSecondaryItem";
import {useCallback, useEffect, useState} from "react";
import {fetchData} from "../../api/fakeApi";
import Loading from "../../components/Loading/Loading";
import {motion} from "framer-motion";
const ServicesCategoryNamePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query] = useSearchParams();
  const name = query.get("name");
  console.log(loading);

  const getData = useCallback((name) => {
    setLoading(true);

    fetchData(name)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getData(name);
  }, [getData, name]);

  return (
    <div className="service-layout">
      <div className="menu-services">
        <div className="menu-box">
          <h2>
            <BsMenuButton />
            Dịch vụ
          </h2>
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/services/category",
                  search: createSearchParams({
                    name: "body",
                  }).toString(),
                }}
              >
                Chăm sóc toàn thân
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/services/category",
                  search: createSearchParams({
                    name: "face",
                  }).toString(),
                }}
              >
                Chăm sóc da mặt
              </Link>
            </li>
          </ul>
        </div>
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading />
          </div>
        )}

        {!loading && data.length > 0 && (
          <motion.div
            className="grid-services"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
          >
            {data.map((item) => (
              <ServiceSecondaryItem data={item} key={new Date().getTime()} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ServicesCategoryNamePage;
