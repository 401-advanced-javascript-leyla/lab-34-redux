import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: uuid(),
      timestamp: new Date(),
    }
    this.state.food = '';
  }

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({food: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewFood(this.state.food);
  }

  handleUpdate = (event) => {
    event.preventDefault();
    this.props.updateFood(this.state.food);
  }

  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteFood(this.state.food);
  }

  render(){
    return (
      <>
        {
          this.props.food.map(name => 
            <>
              <li onChange={this.handleChange}>{name}</li>
              <button onSubmit={this.handleUpdate}>Update</button>
              <button onSubmit={this.handleDelete}>Delete</button>
            </>
          )
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
    createNewFood : foodName => {
      dispatch({
        type: 'FOOD_CREATE',
        payload: foodName,
      });
    },

    updateFood : foodName => {
      dispatch({
        type: 'FOOD_UPDATE',
        payload: foodName
      });
    },

    deleteFood : foodName => {
      dispatch({
        type: 'FOOD_DELETE',
        payload: foodName
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
