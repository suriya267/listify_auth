import { Avatar, Col, Row } from "antd";
import React, { memo, useState } from "react";
import image from "../assets/userCard.png";

const GridView = memo((props: any) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{ backgroundColor: "#dedede", paddingTop: 15 }}>
      <Row gutter={[35, 35]}>
        {props.data.map((item: any, index: any) => {
          return (
            <Col
              span={8}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relatives"
            >
              <div className="shadow bg-white rounded p-4">
                <>
                  <div className="d-flex justify-content-center">
                    <Avatar size={100} src={item?.avatar} />
                  </div>
                  <div className="font-name d-flex justify-content-center">
                    {item?.first_name + " " + item?.last_name}
                  </div>
                  <div className="font-email d-flex justify-content-center">
                    {item?.email}
                  </div>
                </>
              </div>
              {hoveredIndex === index && (
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 z-10 "
                  style={{
                    paddingLeft: 17.5,
                    paddingRight: 17.5,
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center h-100 shadow rounded"
                    style={{ backgroundColor: "rgba(176, 167, 167, 0.6)" }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-5 d-flex justify-content-center align-items-center"
                        style={{
                          backgroundColor: "#8585e6",
                          cursor: "pointer",
                          height: "3rem",
                          width: "3rem",
                        }}
                      >
                        <i className="bi bi-pencil-fill text-white fs-4"></i>
                      </div>
                      <div
                        className="rounded-5 ms-3 d-flex justify-content-center align-items-center"
                        style={{
                          backgroundColor: "#fc0000",
                          cursor: "pointer",
                          height: "3rem",
                          width: "3rem",
                        }}
                      >
                        <i className="bi bi-trash-fill text-white fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          );
        })}
      </Row>
      {/* <img src={image} alt="" /> */}
    </div>
  );
});

export default GridView;
