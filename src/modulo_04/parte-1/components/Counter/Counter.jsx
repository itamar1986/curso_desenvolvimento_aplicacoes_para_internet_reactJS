import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span data-testid="count-value">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções dos Conceitos aplicados a qualidade de código e automação de testes em React:
	Noções de TDD e BDD com Jest.
*/
