import { Row, Col, Select, Input, Button, Collapse } from "antd";
import { DeleteOutlined, CaretRightOutlined } from "@ant-design/icons";

import React, { useState, useEffect } from "react";
import actions from "../../redux/countries/actions";
import { useDispatch } from "react-redux";

import "./filter.scss";

const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;

const { getAllCountries, getFilteredCountries } = actions;

export default function() {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  //Countries according to text value and filter chosen
  const filterCountries = value => {
    dispatch(getFilteredCountries({ filter, value }));
  };

  const clearFilter = () => {
    setFilter("");
    setValue("");
    dispatch(getAllCountries());
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Collapse
      expandIconPosition="right"
      expandIcon={({ isActive }) => (
        <CaretRightOutlined
          rotate={isActive ? 90 : 0}
          style={{ color: "#96a2b2" }}
        />
      )}
      className="collapse"
    >
      <Panel header={<h3 className="collapse__title">Filtros</h3>} key="1">
        <Row gutter={[16, 16]}>
          <Col md={8} sm={24} xs={24}>
            <Select
              style={{ width: "100%" }}
              defaultValue="All"
              value={filter}
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
          {filter === "region" ? (
            <>
              <Col md={12} sm={20} xs={20}>
                <Select
                  style={{ width: "100%" }}
                  defaultValue="All"
                  value={value}
                  onChange={value => setValue(value)}
                  placeholder="Select a filter"
                >
                  <Option value="Africa">Africa</Option>
                  <Option value="Americas">Americas</Option>
                  <Option value="Asia">Asia</Option>
                  <Option value="Europe">Europe</Option>
                  <Option value="Oceania">Oceania</Option>
                </Select>
              </Col>
              <Col md={2} sm={4} xs={4}>
                <Button
                  type="primary"
                  disabled={!value}
                  style={{ width: "100%" }}
                  onClick={() => filterCountries(value)}
                >
                  Search
                </Button>
              </Col>
            </>
          ) : (
            <Col md={14} sm={24} xs={24}>
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
          )}
          <Col md={2} sm={24} xs={24}>
            <Button
              icon={<DeleteOutlined />}
              style={{ width: "100%" }}
              onClick={clearFilter}
            />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
}
