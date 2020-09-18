import actions from "./actions";

const initialState = {
  fetchingCountries: false,
  countries: [],
  fetchContriesError: false,

  fetchingCountryDetails: true,
  countryDetails: {},
  fetchContryDetailsError: false
};

export default function CountriesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_ALL_COUNTRIES_PENDING:
    case actions.FETCH_FILTERED_COUNTRIES_PENDING:
      return {
        ...state,
        fetchingCountries: true,
        fetchContriesError: false,
        countries: []
      };
    case actions.FETCH_ALL_COUNTRIES_SUCCEEDED:
    case actions.FETCH_FILTERED_COUNTRIES_SUCCEEDED:
      return {
        ...state,
        fetchingCountries: false,
        fetchContriesError: false,
        countries: action.countries
      };
    case actions.FETCH_ALL_COUNTRIES_FAILED:
    case actions.FETCH_FILTERED_COUNTRIES_FAILED:
      return {
        ...state,
        fetchingCountries: false,
        fetchContriesError: true,
        countries: []
      };

    case actions.FETCH_COUNTRY_DETAILS_PENDING:
      return {
        ...state,
        fetchingCountryDetails: true,
        fetchContryDetailsError: false,
        countryDetails: {}
      };
    case actions.FETCH_COUNTRY_DETAILS_SUCCEEDED:
      return {
        ...state,
        fetchingCountryDetails: false,
        fetchContryDetailsError: false,
        countryDetails: action.countries
      };
    case actions.FETCH_COUNTRY_DETAILS_FAILED:
      return {
        ...state,
        fetchingCountryDetails: false,
        fetchContryDetailsError: true,
        countryDetails: {}
      };

    default:
      return state;
  }
}
