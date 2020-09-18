import { List } from "antd";
import React from "react";

import CountryCard from "./CountryCard";

import "./styles.scss";

export default function({ countries }) {
  //Show list of countries
  return (
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
        }
      }}
      className='CountriesList'
      dataSource={countries}
      renderItem={item => <CountryCard country={item} />}
    />
  );
}
