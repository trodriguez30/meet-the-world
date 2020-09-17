import { all, takeLatest, put, call } from "redux-saga/effects";
import services from "./services";
import actions from "./actions";

function* getAllCountriesAxios() {
  console.log("here");
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
    console.log(err);
    yield put({ type: actions.SEND_SHOPPING_CART_FAILED });
  }
}

function* getFilteredCountriesAxios({ payload }) {
  try {
    const response = yield call(services.fetchFilteredCountries, payload);
    console.log(response);
    if (response) {
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

export default function* rootSaga() {
  yield all([
    takeLatest(actions.FETCH_ALL_COUNTRIES_PENDING, getAllCountriesAxios),
    takeLatest(
      actions.FETCH_FILTERED_COUNTRIES_PENDING,
      getFilteredCountriesAxios
    )
  ]);
}
