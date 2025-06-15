import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import React, { memo } from "react";

interface tab {
  mode: string;
  setMode: any;
}
const Tabs = memo((props: tab) => {
  const { mode, setMode } = props;
  return (
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
  );
});

export default Tabs;
