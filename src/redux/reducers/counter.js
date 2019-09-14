import { INCREMENT, DECREMENT } from '../actions/counter';

export const initialState = {
  count: 0
}

export function counterReducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções de Redux e fluxos da arquitetura com ReactJS:
	Noções da prática de como desenvolver código com React e Redux.
*/