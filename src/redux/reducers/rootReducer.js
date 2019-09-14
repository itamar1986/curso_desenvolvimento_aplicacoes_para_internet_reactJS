import { combineReducers } from 'redux'
import { cientistasReducer } from './cientistas'
import { counterReducer } from './counter'

const rootReducer = combineReducers({
  cientistas: cientistasReducer,
  counter: counterReducer
})

export default rootReducer;

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções de Comunicação avançada entre aplicações:
	Noções de Redux + Rest.
*/