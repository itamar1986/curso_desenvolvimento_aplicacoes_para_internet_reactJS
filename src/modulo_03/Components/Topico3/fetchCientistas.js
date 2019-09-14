import { fetchCientistasPending, fetchCientistasSuccess, fetchCientistasError } from '../../../redux/actions/cientistas';

function fetchCientistas() {
  return dispatch => {
    dispatch(fetchCientistasPending());
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchCientistasSuccess(res));
      })
      .catch(error => {
        dispatch(fetchCientistasError(error));
      })
  }
}

export default fetchCientistas;

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções de Comunicação avançada entre aplicações:
	Noções de Redux + Rest.
*/