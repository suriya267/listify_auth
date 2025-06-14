import { Avatar, Table, type TableProps } from "antd";
import React, { memo } from "react";

const CustomeTable = memo((props: any) => {
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
      render: (text) => <a>{text}</a>,
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
      dataIndex: "action",
      key: "5",
    },
  ];

  return (
    <Table columns={columns} dataSource={props?.data} pagination={false} />
  );
});

export default CustomeTable;
