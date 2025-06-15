import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../actions/Action";
import CustomeTable from "../components/CustomeTable";
import GridView from "../components/GridView";
import Tabs from "../components/Tabs";
import SearchView from "../components/SearchView";
import AddEditModal from "../components/AddEditModal";

const View = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [getAllUserLoading, setGetAllUserLoading] = useState<boolean>(false);
  const getAllUser = useSelector((state: any) => state?.getAllUser);
  const getAllUserLoad = useSelector((state: any) => state?.getAllUserLoad);
  const [userData, setUserData] = useState<any>();
  const [mode, setMode] = useState<string>("list");
  const [searchName, setSearchName] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [prePopulate, setPrePopulate] = useState<any>(null);
  const [handlePagination, setHandlePagination] = useState<boolean>(false);

  //call get users api
  useEffect(() => {
    if (!searchName) {
      dispatch(getAllUserAction(currentPage));
      setGetAllUserLoading(true);
      setHandlePagination(false);
    }
  }, [currentPage, searchName]);

  //set users api result to state
  useEffect(() => {
    if (getAllUserLoading === true && getAllUserLoad === false) {
      setUserData(getAllUser);
      setFilteredUsers(getAllUser?.data);
    }
  }, [getAllUserLoading, getAllUserLoad]);

  //filter functionality
  const filterUserFuntion = () => {
    try {
      const term = searchName.toLowerCase();
      const filtered = userData?.data?.filter(
        (user: any) =>
          user?.first_name.toLowerCase().includes(term) ||
          user?.last_name.toLowerCase().includes(term)
      );
      setFilteredUsers(filtered);
      setCurrentPage(1);
      setHandlePagination(true);
    } catch (error) {
      console.log("Error in filter names::", error);
    }
  };

  const startIndex = (currentPage - 1) * 6;
  const currentUsers = handlePagination
    ? filteredUsers?.slice(startIndex, startIndex + 6)
    : filteredUsers;


  return (
    <div>
      <div className="shadow bg-white" style={{ marginTop: "8rem" }}>
        <SearchView
          searchName={searchName}
          setSearchName={setSearchName}
          filterUserFuntion={filterUserFuntion}
          setIsModalOpen={setIsModalOpen}
          setPrePopulate={setPrePopulate}
        />
        <div className="mt-4 px-4">
          <Tabs mode={mode} setMode={setMode} />
        </div>
        <div>
          {mode === "list" ? (
            <CustomeTable
              data={currentUsers || []}
              setIsModalOpen={setIsModalOpen}
              setPrePopulate={setPrePopulate}
            />
          ) : (
            <GridView
              data={currentUsers || []}
              setIsModalOpen={setIsModalOpen}
              setPrePopulate={setPrePopulate}
            />
          )}
        </div>
      </div>
      <div className="py-3 d-flex justify-content-end">
        <Pagination
          onChange={(e) => setCurrentPage(e)}
          current={currentPage}
          total={searchName ? currentUsers?.length : userData?.total}
        />
      </div>
      <AddEditModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        prePopulate={prePopulate}
        setPrePopulate={setPrePopulate}
      />
    </div>
  );
};

export default View;
