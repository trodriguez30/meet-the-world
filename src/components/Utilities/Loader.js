import React from "react";
import { GlobalOutlined } from "@ant-design/icons";
import "./styles.scss";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <GlobalOutlined style={{ fontSize: 200 }} />
      </div>
    </div>
  );
}
