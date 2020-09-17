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
    yield put({ type: actions.SEND_SHOPPING_CART_FAILED });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.FETCH_ALL_COUNTRIES_PENDING, getAllCountriesAxios)
  ]);
}
