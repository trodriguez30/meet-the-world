import { List, Card, Button, Typography, Modal } from "antd";
import { EyeOutlined, GlobalOutlined } from "@ant-design/icons";

import React, { useState } from "react";

import CountryDetails from "./CountryDetails";

import "./styles.scss";

const { Meta } = Card;
const { Title } = Typography;

const DescriptionItems = props => (
  <li className="CountryCard__items">
    <GlobalOutlined style={{ marginRight: 16, color: "#26272b" }} />
    {props.children}
  </li>
);

export default function CountryCard({ country }) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  return (
    <>
      <List.Item>
        <Card
          className="CountryCard"
          hoverable
          cover={
            <img
              alt={`flag-${country.name}`}
              src={country.flag}
              style={{ height: "150px" }}
            />
          }
          actions={[
            <Button
              type="link"
              className="CountryCard__actions"
              block
              icon={<EyeOutlined />}
              onClick={showModal}
            >
              Read more
            </Button>
          ]}
        >
          <Meta
            title={
              <Title level={4} type="primary">
                {country.name}
              </Title>
            }
            description={
              <ul>
                <DescriptionItems>
                  Capital:{" "}
                  <span className="CountryCard__items--info">
                    {country.capital}{" "}
                  </span>
                </DescriptionItems>
                <DescriptionItems>
                  Continent:{" "}
                  <span className="CountryCard__items--info">
                    {country.region}{" "}
                  </span>
                </DescriptionItems>
                <DescriptionItems>
                  Currencies:{" "}
                  <ul className="CountryCard__items--info">
                    {country.currencies.map((cr, i) => (
                      <li key={i} className="CountryCard__items--list">
                        {cr.code}
                      </li>
                    ))}
                  </ul>
                </DescriptionItems>
                <DescriptionItems>
                  Languages:{" "}
                  <ul className="CountryCard__items--info">
                    {country.languages.map((cr, i) => (
                      <li key={i} className="CountryCard__items--list">
                        {cr["iso639_1"]}
                      </li>
                    ))}
                  </ul>
                </DescriptionItems>
              </ul>
            }
          />
        </Card>
      </List.Item>
      <Modal
        title={
          <Title level={4} strong>
            {country.name}
          </Title>
        }
        visible={visible}
        onOk={handleOk}
        width={900}
        footer={null}
        onCancel={handleCancel}
        style={{ top: "5vh" }}
      >
        <CountryDetails countryName={country.name} />
      </Modal>
    </>
  );
}
