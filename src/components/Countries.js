import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../redux/countries/actions";

const { getAllCountries, getFilteredCountries } = actions;

export default function Countries() {
  const dispatch = useDispatch();
  const fetchingCountries = useSelector(
    state => state.Countries.fetchingCountries
  );
  const countries = useSelector(state => state.Countries.countries);

  const fetchContriesError = useSelector(
    state => state.Countries.fetchContriesError
  );

  useEffect(() => {
    dispatch(getAllCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetchingCountries) {
    return <>Cargando</>;
  }

  if (fetchContriesError) {
    return <>Error</>;
  }

  return <div>Countries {console.log(countries)}</div>;
}
