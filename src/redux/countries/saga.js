import { all, takeLatest, put, call } from "redux-saga/effects";
import services from "./services";
import actions from "./actions";

function* getAllCountriesAxios() {
  try {
    const response = yield call(services.fetchAllCountries);
    if (response.status === 200) {
      const { data } = response;
      yield put({
        type: actions.FETCH_ALL_COUNTRIES_SUCCEEDED,
        countries: data
      });
    }
  } catch (err) {
    yield put({ type: actions.FETCH_ALL_COUNTRIES_FAILED });
  }
}

function* getFilteredCountriesAxios({ payload }) {
  try {
    const response = yield call(services.fetchFilteredCountries, payload);
    if (response.status === 200) {
      const { data } = response;
      yield put({
        type: actions.FETCH_FILTERED_COUNTRIES_SUCCEEDED,
        countries: data
      });
    }
  } catch (err) {
    yield put({ type: actions.FETCH_FILTERED_COUNTRIES_FAILED });
  }
}

function* getCountryDetailsAxios({ payload }) {
  try {
    const response = yield call(services.fetchCountryDetails, payload);
    if (response.status === 200) {
      const { data } = response;
      yield put({
        type: actions.FETCH_COUNTRY_DETAILS_SUCCEEDED,
        countries: data[0]
      });
    }
  } catch (err) {
    yield put({ type: actions.FETCH_COUNTRY_DETAILS_FAILED });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.FETCH_ALL_COUNTRIES_PENDING, getAllCountriesAxios),
    takeLatest(
      actions.FETCH_FILTERED_COUNTRIES_PENDING,
      getFilteredCountriesAxios
    ),
    takeLatest(actions.FETCH_COUNTRY_DETAILS_PENDING, getCountryDetailsAxios)
  ]);
}
