import { Layout, List } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../redux/countries/actions";

import CountryCard from "./CountryCard";
import Loader from "../Utilities/Loader";
import logo from "../../assets/Logo-horizontal.jpg";

import "./styles.scss";

const { Header, Footer, Content } = Layout;

const { getAllCountries, getFilteredCountries } = actions;

export default function() {
  const dispatch = useDispatch();

  const fetchingCountries = useSelector(
    state => state.Countries.fetchingCountries
  );
  const countries = useSelector(state => state.Countries.countries);

  const fetchContriesError = useSelector(
    state => state.Countries.fetchContriesError
  );

  useEffect(() => {
    dispatch(getAllCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetchingCountries) {
    return <Loader />;
  }

  if (fetchContriesError) {
    return <>Error</>;
  }

  return (
    <Layout className="container">
      <Header className="container__header">
        <img src={logo} alt="logo" className="header__logo" />
      </Header>
      <Content className="container__countries">
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
      <Footer className="container__footer">Footer</Footer>
    </Layout>
  );
}
