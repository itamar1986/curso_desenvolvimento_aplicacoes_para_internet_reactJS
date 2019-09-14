import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore( rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));


serviceWorker.unregister();

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções de Redux e fluxos da arquitetura com ReactJS:
	Noções da prática de como desenvolver código com React e Redux.
*/
/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções de Comunicação avançada entre aplicações:
	Noções de Redux + Rest.
*/