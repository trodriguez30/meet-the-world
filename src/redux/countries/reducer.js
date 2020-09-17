import actions from "./actions";

const initialState = {
  fetchingCountries: false,
  countries: [],
  fetchContriesError: false
};

export default function CountriesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_ALL_COUNTRIES_PENDING:
      return {
        ...state,
        fetchingCountries: true,
        fetchContriesError: false,
        countries: []
      };
    case actions.FETCH_ALL_COUNTRIES_SUCCEEDED:
      return {
        ...state,
        fetchingCountries: false,
        fetchContriesError: false,
        countries: action.countries
      };
    case actions.FETCH_ALL_COUNTRIES_FAILED:
      return {
        ...state,
        fetchingCountries: false,
        fetchContriesError: true,
        countries: []
      };
    case actions.FETCH_FILTERED_COUNTRIES_PENDING:
      return {
        ...state,
        fetchingCountries: true,
        fetchContriesError: false,
        countries: []
      };
    case actions.FETCH_FILTERED_COUNTRIES_SUCCEEDED:
      return {
        ...state,
        fetchingCountries: false,
        fetchContriesError: false,
        countries: action.countries
      };
    case actions.FETCH_FILTERED_COUNTRIES_FAILED:
      return {
        ...state,
        fetchingCountries: false,
        fetchContriesError: true,
        countries: []
      };
    default:
      return state;
  }
}
