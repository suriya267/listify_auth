import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { logoutAction } from "../actions/Action";
import { useEffect, useState } from "react";
import { clearAuthToken } from "../utils/localStorage";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutLoading, setLogoutLoading] = useState<boolean>(false);
  const logoutLoad = useSelector((state: any) => state.logoutLoad);

  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setVisible(true);
      } else if (currentScroll > scrollY) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      setScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    if (logoutLoad === false && logoutLoading === true) {
      clearAuthToken();
      setLogoutLoading(false);
      navigate("/");
    }
  }, [logoutLoad, logoutLoading]);

  const handleLogOut = () => {
    dispatch(logoutAction());
    setLogoutLoading(true);
  };

  return (
    <div>
      <div
        className="vw-100 py-4 px-5"
        style={{
          background: "#001628",
          position: "fixed",
          top: visible ? 0 : -80,
          left: 0,
          right: 0,
          transition: "top 0.3s ease",
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div className="d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <div className="text-white me-4">Elon Musk</div>
            <Button
              onClick={handleLogOut}
              style={{ borderRadius: 2, padding: "5px 8px" }}
              type="primary"
              danger
            >
              <PoweroffOutlined
                style={{
                  height: 17,
                  width: 17,
                  transform: "rotate(90deg)",
                  fontSize: 20,
                }}
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="container mt-6">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
