import { Avatar, Button, Table, type TableProps } from "antd";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteUserAction } from "../actions/Action";
interface customeTable {
  data: any;
  setIsModalOpen: any;
  setPrePopulate: any;
}
const CustomeTable = memo((props: customeTable) => {
  const { data, setIsModalOpen, setPrePopulate } = props;
  const dispatch = useDispatch();

  const handleEdit = (id: number) => {
    try {
      let user = data.find((user: any) => user?.id === id);
      setPrePopulate(user);
      setIsModalOpen(true);
    } catch (error) {
      console.log("Error in handleEdit::", error);
    }
  };

  //call elete api
  const handleDelete = (id: number) => {
    dispatch(deleteUserAction(id));
  };

  const columns: TableProps["columns"] = [
    {
      title: "",
      dataIndex: "avatar",
      key: "1",
      align: "center",
      width: "18%",
      render: (item) => <Avatar size={40} src={item} />,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "2",
      width: "20%",
      render: (text) => <a style={{ color: "#1677ff" }}>{text}</a>,
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "3",
      width: "20%",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "4",
      width: "20%",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "5",
      render: (id) => (
        <div>
          <Button onClick={() => handleEdit(id)} type="primary">
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(id)}
            className="ms-3"
            color="danger"
            variant="solid"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
});

export default CustomeTable;
