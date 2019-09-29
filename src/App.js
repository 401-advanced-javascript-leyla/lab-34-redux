import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: uuid(),
      timestamp: new Date(),
      food: ''
    }
  }

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({food: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewFood(this.state.food);
  }

  render(){
    return (
      <>
        {
          this.props.food.map(name => {
            <li>{name}</li>
          })
        }

        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            value={this.state.food}
            onChange={this.handleChange}
            placeholder='Enter your favorite food'
          />
        </form>
      </>
    );
  }
}

//Leyla - this will read the data in the state
const mapStateToProps = state => {
  return{
    food: state.food,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewFood : foodNmame => {
      dispatch({
        type: 'FOOD_CREATE',
        payload: food,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
