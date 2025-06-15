import { Spin } from "antd";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <Spin tip="Loading..." size="large" />
    </div>
  );
}

export default Loader;
