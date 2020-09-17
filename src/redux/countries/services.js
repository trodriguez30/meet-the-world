import axios from "axios";

const services = {
  fetchAllCountries: () => {
    const opts = {
      method: "GET",
      url: "https://restcountries.eu/rest/v2/all"
    };
    console.log(opts);
    return axios(opts);
  },

  fetchFilteredCountries: payload => {
    console.log(payload);
    const opts = {
      method: "GET",
      url: "https://restcountries.eu/rest/v2/all"
    };
    return axios(opts);
  }
};

export default services;
