import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Pagination, Radio } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../actions/Action";
import CustomeTable from "../components/CustomeTable";
import GridView from "../components/GridView";

const View = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [getAllUserLoading, setGetAllUserLoading] = useState<boolean>(false);
  const getAllUser = useSelector((state: any) => state.getAllUser);
  const getAllUserLoad = useSelector((state: any) => state.getAllUserLoad);
  const [userData, setUserData] = useState<any>();
  const [mode, setMode] = useState<string>("list");

  useEffect(() => {
    dispatch(getAllUserAction(currentPage));
    setGetAllUserLoading(true);
  }, [currentPage]);

  useEffect(() => {
    if (getAllUserLoading === true && getAllUserLoad === false) {
      setUserData(getAllUser);
    }
  }, [getAllUserLoading, getAllUserLoad]);

  console.log("useData", userData);

  return (
    <div>
      <div className="shadow bg-white" style={{ marginTop: "8rem" }}>
        <div className="d-flex justify-content-between p-4">
          <div className="fs-5" style={{ fontWeight: 600 }}>
            Users
          </div>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <Search
                style={{ borderRadius: 2 }}
                placeholder="input search text"
                //   onSearch={onSearch}
              />
            </div>
            <div>
              <Button
                type="primary"
                style={{ borderRadius: 2 }}
                htmlType="submit"
              >
                Create User
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4 px-4">
          <Radio.Group
            onChange={(e) => setMode(e.target.value)}
            value={mode}
            style={{ marginBottom: 8 }}
          >
            <Radio.Button
              style={{ borderBottomLeftRadius: 3, borderTopLeftRadius: 3 }}
              value="list"
            >
              <TableOutlined />
              <span className="ms-1">Table</span>
            </Radio.Button>
            <Radio.Button
              style={{ borderBottomRightRadius: 3, borderTopRightRadius: 3 }}
              value="grid"
            >
              <UnorderedListOutlined />
              <span className="ms-1"> Card</span>
            </Radio.Button>
          </Radio.Group>
        </div>
        <div>
          {mode === "list" ? (
            <CustomeTable data={userData?.data || []} />
          ) : (
            <GridView data={userData?.data || []} />
          )}
        </div>
      </div>
      <div className="py-3 d-flex justify-content-end">
        <Pagination
          onChange={(e) => setCurrentPage(e)}
          current={currentPage}
          total={userData?.total}
        />
      </div>
    </div>
  );
};

export default View;
