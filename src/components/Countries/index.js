import { List, Typography } from "antd";
import React from "react";

import CountryCard from "./CountryCard";

import "./styles.scss";

const { Title } = Typography;

export default function({ countries }) {
  //Show list of countries
  return (
    <>
      <Title level={4}>Countries:</Title>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3
        }}
        pagination={{
          onChange: page => {
            console.log(page);
          },
        }}
        dataSource={countries}
        renderItem={item => <CountryCard country={item} />}
      />
    </>
  );
}
