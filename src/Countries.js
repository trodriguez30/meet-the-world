import { Layout, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LinkedinOutlined,
  GithubOutlined,
  GitlabOutlined
} from "@ant-design/icons";

import actions from "./redux/countries/actions";

import CountriesList from "./components/Countries/";
import Filter from "./components/Filter/";
import Loader from "./components/Utilities/Loader";
import logo from "./assets/Logo-horizontal.jpg";

import "./countries.scss";

const { Header, Footer, Content } = Layout;

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
        <CountriesList countries={countries} />
      </Content>
      <Footer className="container__footer">
        <Row>
          <Col span={16}>
            <p className="container__footer--copyright">
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
