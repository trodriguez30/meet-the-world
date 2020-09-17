import { List, Card, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import React from "react";

const { Meta } = Card;

export default function CountryCard({ country }) {
  return (
    <List.Item>
      <Card
        hoverable
        cover={
          <img
            alt={`flag-${country.name}`}
            src={country.flag}
            style={{ height: "150px" }}
          />
        }
        actions={[
          <Button type="link" block icon={<InfoCircleOutlined />}>
            Search
          </Button>
        ]}
      >
        <Meta
          title={country.name}
          description={
            <div>
              <p>Capital city: {country.capital}</p>
              <br />
              <p>Languages: {country.languages[0]["iso639_1"]}</p>
              <br />
              <p>Continent: {country.region}</p>
              <br />
              <p>Currencies: {country.currencies[0].code}</p>
              <br />
            </div>
          }
        />
      </Card>
    </List.Item>
  );
}
