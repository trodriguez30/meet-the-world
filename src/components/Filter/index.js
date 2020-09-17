import { Row, Col, Select, Input, Typography } from "antd";
import React, { useState, useEffect } from "react";

const { Option } = Select;
const { Title } = Typography;

export default function(props) {
  const [filter, setFilter] = useState("");
  const [valueInput, setValueInput] = useState("");

  //Clear input when filter change
  useEffect(() => {
    setValueInput("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  //Run filter every time the input text changes
  useEffect(() => {
    filterCountries(valueInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput]);

  const handleChange = event => {
    setValueInput(event.target.value);
  };

  //Countries according to text value and filter chosen
  const filterCountries = value => {
    const data = [...props.data];
    let filtered = [];
    switch (filter) {
      case "languages":
        filtered = data.filter(d => {
          const languages = Object.values(d.languages).map(
            lg => lg["iso639_1"]
          );
          const isInclude = languages.map(lang => {
            return lang && lang.toLowerCase().includes(value.toLowerCase());
          });
          if (isInclude.includes(true)) return d;
        });
        break;
      case "callingCodes":
        filtered = data.filter(d => {
          const isInclude = d[filter].map(lang => {
            return lang && lang.toLowerCase().includes(value.toLowerCase());
          });
          if (isInclude.includes(true)) return d;
        });
        break;
      case "region":
      case "name":
      case "capital":
        filtered = data.filter(d => {
          if (d[filter].toLowerCase().includes(value.toLowerCase())) return d;
        });
        break;
      default:
        filtered = data;
        break;
    }

    //Return new array of countries
    props.updateData(filtered);
  };

  return (
    <>
      <Title level={4}>Filtrar por:</Title>
      <Row gutter={[16, 16]}>
        <Col md={10}>
          <Select
            style={{ width: "100%" }}
            onChange={value => setFilter(value)}
            placeholder="Select a filter"
          >
            <Option value="languages">Language</Option>
            <Option value="region">Continent</Option>
            <Option value="name">Name</Option>
            <Option value="capital">Capital city</Option>
            <Option value="callingCodes">Calling code</Option>
          </Select>
        </Col>
        <Col md={14}>
          <Input
            style={{ width: "100%" }}
            disabled={!filter}
            value={valueInput}
            type={filter === "callingCodes" ? "number" : "text"}
            placeholder="input search text"
            enterButton="Search"
            onChange={handleChange}
          />
        </Col>
      </Row>
    </>
  );
}
