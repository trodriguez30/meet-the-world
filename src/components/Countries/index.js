import { Layout, List, Row, Col, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LinkedinOutlined,
  GithubOutlined,
  GitlabOutlined
} from "@ant-design/icons";

import actions from "../../redux/countries/actions";

import CountryCard from "./CountryCard";
import Filter from "../Filter/";
import Loader from "../Utilities/Loader";
import logo from "../../assets/Logo-horizontal.jpg";

import "./styles.scss";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const { getAllCountries } = actions;

export default function() {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);

  const fetchingCountries = useSelector(
    state => state.Countries.fetchingCountries
  );
  const countriesData = useSelector(state => state.Countries.countries);

  const fetchContriesError = useSelector(
    state => state.Countries.fetchContriesError
  );

  useEffect(() => {
    dispatch(getAllCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (countriesData) {
      setCountries(countriesData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countriesData]);

  const updateCountries = data => {
    console.log(data);
    setCountries(data);
  };

  //Handling state while API responds
  if (fetchingCountries) {
    return <Loader />;
  }

  //handling state if API returns error
  if (fetchContriesError) {
    return <>Error</>;
  }

  //Show list of countries
  return (
    <Layout className="container">
      <Header className="container__header">
        <img src={logo} alt="logo" className="container__headerLogo" />
      </Header>
      <Content className="container__countries">
        <Filter data={countriesData} updateData={updateCountries} />
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
            pageSize: 12
          }}
          dataSource={countries}
          renderItem={item => <CountryCard country={item} />}
        />
      </Content>
      <Footer className="container__footer">
        <Row>
          <Col span={16}>
            <p class="container__footer--copyright">
              Copyright &copy; 2020 All Rights Reserved by Tatiana Rodríguez.
            </p>
          </Col>
          <Col span={8}>
            <ul className="container__footer--icons">
              <li>
                <a href="https://linkedin.com/in/tatiana-paola-rodr%C3%ADguez- pacheco-86a582141/">
                  <LinkedinOutlined
                    style={{ color: "#96a2b2", fontSize: 30 }}
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/trodriguez30">
                  <GithubOutlined style={{ color: "#96a2b2", fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a href="https://gitlab.com/trodriguez30">
                  <GitlabOutlined style={{ color: "#96a2b2", fontSize: 30 }} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}
