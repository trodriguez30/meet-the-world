const actions = {
  FETCH_ALL_COUNTRIES_PENDING: "FETCH_ALL_COUNTRIES_PENDING",
  FETCH_ALL_COUNTRIES_SUCCEEDED: "FETCH_ALL_COUNTRIES_SUCCEEDED",
  FETCH_ALL_COUNTRIES_FAILED: "FETCH_ALL_COUNTRIES_FAILED",

  FETCH_FILTERED_COUNTRIES_PENDING: "FETCH_FILTERED_COUNTRIES_PENDING",
  FETCH_FILTERED_COUNTRIES_SUCCEEDED: "FETCH_FILTERED_COUNTRIES_SUCCEEDED",
  FETCH_FILTERED_COUNTRIES_FAILED: "FETCH_FILTERED_COUNTRIES_FAILED",

  getAllCountries: () => ({
    type: actions.FETCH_ALL_COUNTRIES_PENDING
  }),

  getFilteredCountries: payload => ({
    type: actions.FETCH_FILTERED_COUNTRIES_PENDING,
    payload
  })
};
export default actions;
