import { Button } from "antd";
import Search from "antd/es/input/Search";
import React, { memo } from "react";

interface searchView {
  searchName: string;
  setSearchName: any;
  filterUserFuntion: any;
  setIsModalOpen: any;
  setPrePopulate: any;
}
const SearchView = memo((props: searchView) => {
  const {
    searchName,
    setSearchName,
    filterUserFuntion,
    setIsModalOpen,
    setPrePopulate,
  } = props;

  const openCreateModal = () => {
    setPrePopulate(null);
    setIsModalOpen(true);
  };
  return (
    <div className="d-flex justify-content-between p-4">
      <div className="fs-5" style={{ fontWeight: 600 }}>
        Users
      </div>
      <div className="d-flex align-items-center">
        <div className="me-3">
          <Search
            style={{ borderRadius: 2 }}
            placeholder="input search text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            onSearch={filterUserFuntion}
            allowClear
          />
        </div>
        <div>
          <Button
            type="primary"
            style={{ borderRadius: 2 }}
            htmlType="submit"
            onClick={openCreateModal}
          >
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
});

export default SearchView;
