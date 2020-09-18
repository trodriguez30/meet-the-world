import { Row, Col, Select, Input, Typography, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import React, { useState } from "react";
import actions from "../../redux/countries/actions";
import { useDispatch } from "react-redux";

const { Option } = Select;
const { Title } = Typography;
const { Search } = Input;

const { getAllCountries, getFilteredCountries } = actions;

export default function(props) {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");
  const [value, setValue] = useState("");

  //Countries according to text value and filter chosen
  const filterCountries = value => {
    dispatch(getFilteredCountries({ filter, value }));
  };

  const clearFilter = () => {
    setValue("");
    dispatch(getAllCountries());
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <>
      <Title level={4}>Filtrar por:</Title>
      <Row gutter={[16, 16]}>
        <Col md={8}>
          <Select
            style={{ width: "100%" }}
            defaultValue="All"
            onChange={value => setFilter(value)}
            placeholder="Select a filter"
          >
            <Option value="lang">Language</Option>
            <Option value="region">Continent</Option>
            <Option value="name">Name</Option>
            <Option value="capital">Capital city</Option>
            <Option value="callingcode">Calling code</Option>
          </Select>
        </Col>
        <Col md={14}>
          <Search
            value={value}
            style={{ width: "100%" }}
            disabled={!filter}
            type={filter === "callingcode" ? "number" : "text"}
            placeholder="input search text"
            enterButton="Search"
            onChange={handleChange}
            onSearch={value => filterCountries(value)}
          />
        </Col>
        <Col md={2}>
          <Button
            icon={<DeleteOutlined />}
            style={{ width: "100%" }}
            onClick={clearFilter}
          />
        </Col>
      </Row>
    </>
  );
}
