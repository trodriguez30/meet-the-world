import { Layout, Typography, Row, Col, Skeleton, Empty } from "antd";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { GlobalOutlined } from "@ant-design/icons";
import actions from "../../redux/countries/actions";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const { Text, Title } = Typography;

const { getCountryDetails } = actions;

const mapStyles = {
  display: "flex",
  width: "98%",
  height: "250px"
};

//Country details component
const Item = props => (
  <Col span={props.row ? 24 : 12}>
    <Title level={5} style={{ color: "#40A9FF" }}>
      <GlobalOutlined style={{ marginRight: 16, color: "#40A9FF" }} />
      {props.label}:
    </Title>

    {typeof props.children !== "object" ? (
      <div className="itemDescription">
        <Text>{props.children}</Text>
      </div>
    ) : (
      props.children
    )}
  </Col>
);

//Modal Content
function CountryDetails(props) {
  const { countryName } = props;

  const dispatch = useDispatch();

  const fetchingCountryDetails = useSelector(
    state => state.Countries.fetchingCountryDetails
  );
  const country = useSelector(state => state.Countries.countryDetails);

  const fetchContryDetailsError = useSelector(
    state => state.Countries.fetchContryDetailsError
  );

  useEffect(() => {
    dispatch(getCountryDetails({ name: countryName }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Handling state while API responds
  if (fetchingCountryDetails) {
    return <Skeleton active />;
  }

  //handling state if API returns error
  if (fetchContryDetailsError) {
    return <Empty />;
  }

  return (
    <Layout className="CountryDetailsContainer">
      <Row justify="space-around" align="middle" gutter={[16, 16]}>
        <Item label="Top level domain">{country.topLevelDomain[0]}</Item>
        <Item label="Alpha code">{country.alpha3Code}</Item>
        <Item label="Subregion">{country.subregion}</Item>
        <Item label="Population">{country.population}</Item>
        <Item label="Borders">
          {country.borders.length !== 0 ? (
            <ul className="itemDescription">
              {country.borders.map((border, index) => (
                <li key={index}>{border}</li>
              ))}
            </ul>
          ) : (
            "No Data"
          )}
        </Item>
        <Item label="Languages name">
          <ul className="itemDescription">
            {country.languages.map((language, index) => (
              <li key={index}>{language.name}</li>
            ))}
          </ul>
        </Item>
        <Item label="Location" row>
          <div style={mapStyles}>
            <Map
              google={props.google}
              zoom={5}
              style={mapStyles}
              initialCenter={{
                lat: country.latlng[0],
                lng: country.latlng[1]
              }}
            >
              <Marker />
            </Map>
          </div>
        </Item>
      </Row>
    </Layout>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBCUogZHHShnrgcylKF4a6Fha5UZdaqi1w"
})(CountryDetails);
