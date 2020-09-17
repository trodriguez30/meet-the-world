import { Descriptions, Layout, Typography } from "antd";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import React from "react";

const { Text } = Typography;
const mapStyles = {
  width: "95%",
  height: "300px"
};

function CountryDetails(props) {
  const { country } = props;
  return (
    <Layout className="CountryDetailsContainer">
      <Descriptions
        title={`${country.name} - ${country.nativeName}`}
        layout="vertical"
      >
        <Descriptions.Item label={<Text strong>Top level domain</Text>}>
          {country.topLevelDomain[0]}
        </Descriptions.Item>
        <Descriptions.Item label={<Text strong>Alpha code</Text>}>
          {country.alpha3Code}
        </Descriptions.Item>
        <Descriptions.Item label={<Text strong>Subregion</Text>}>
          {country.subregion}
        </Descriptions.Item>
        <Descriptions.Item label={<Text strong>Population</Text>}>
          {country.population}
        </Descriptions.Item>
        <Descriptions.Item label={<Text strong>Borders</Text>}>
          <ul>
            {country.borders.map((border, index) => (
              <li key={index}>{border}</li>
            ))}
          </ul>
        </Descriptions.Item>
        <Descriptions.Item label={<Text strong>Languages name</Text>}>
          <ul>
            {country.languages.map((language, index) => (
              <li key={index}>{language.name}</li>
            ))}
          </ul>
        </Descriptions.Item>
        <Descriptions.Item label={<Text strong>Location</Text>}>
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
        </Descriptions.Item>
      </Descriptions>
    </Layout>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBCUogZHHShnrgcylKF4a6Fha5UZdaqi1w"
})(CountryDetails);
