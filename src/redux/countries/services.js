import axios from "axios";

const services = {
  fetchAllCountries: () => {
    const opts = {
      method: "GET",
      url:
        "https://restcountries.eu/rest/v2/all?fields=flag;name;capital;languages;region;currencies"
    };
    return axios(opts);
  },

  fetchFilteredCountries: ({ filter, value }) => {
    const opts = {
      method: "GET",
      url: `https://restcountries.eu/rest/v2/${filter}/${value}?fields=flag;name;capital;languages;region;currencies`
    };
    return axios(opts);
  },

  fetchCountryDetails: ({ name }) => {
    const opts = {
      method: "GET",
      url: `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
    };
    return axios(opts);
  }
};

export default services;
