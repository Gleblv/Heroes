import {filtersFetching, filtersFetched, filtersFetchingError} from '../components/heroesFilters/filtresSlice'

export const fetchFiltres = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}