import { List, Card, Button, Typography, Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";

import React, { useState } from "react";

import CountryDetails from "./CountryDetails";

import "./styles.scss";

const { Meta } = Card;
const { Title } = Typography;

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
              style={{
                color: "#26272b"
              }}
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
            description="term"
          />
        </Card>
      </List.Item>
      <Modal
        title={
          <Title level={4} strong>
            {`${country.name} - ${country.nativeName}`}
          </Title>
        }
        visible={visible}
        onOk={handleOk}
        width={900}
        footer={null}
        onCancel={handleCancel}
        style={{ top: "5vh" }}
      >
        <CountryDetails country={country} />
      </Modal>
    </>
  );
}
