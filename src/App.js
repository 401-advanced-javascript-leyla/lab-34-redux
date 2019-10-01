/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.food = '';
    this.state.nameHolder = '';
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ food: value });
  }

  handleHoderChange = (event) => {
    const { value } = event.target;
    this.setState({ nameHolder: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewFood(this.state.food);
    this.setState({ food: '' });
  }

  handleUpdate = (event) => {
    event.preventDefault();
    const { id } = event.target;
    this.props.updateFood(this.state.nameHolder, id);
  }

  handleDelete = (event) => {
    event.preventDefault();
    const { id } = event.target;
    this.props.deleteFood(id);
  }

  render() {
    return (
      <>
        {
          this.props.food.map((foodName) => <form>
              <li>{foodName.name}
                <input
                  type='text'
                  value={this.state.nameHolder}
                  onChange={this.handleHoderChange} 
                  placeholder={foodName.name} />
            
                <button id={foodName.id} onClick={this.handleUpdate}>Update</button>
                <button id={foodName.id} onClick={this.handleDelete}>Delete</button>
              </li>
            </form>)
          }

        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            value={this.state.food}
            onChange={this.handleChange}
            placeholder='Enter your favorite food'
          />
          <button type='submit'>
            Create a new food
          </button>
        </form>
      </>
    );
  }
}

// Leyla - this will read the data in the state
const mapStateToProps = (state) => {
  return {
    food: state.food,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewFood: (foodName) => {
      dispatch({
        type: 'FOOD_CREATE',
        payload: foodName,
      });
    },

    updateFood: (foodName, id) => {
      dispatch({
        type: 'FOOD_UPDATE',
        payload: { name: foodName, id },
      });
    },

    deleteFood: (id) => {
      dispatch({
        type: 'FOOD_DELETE',
        payload: id,
      });
    },
  };
};


// this line will allow you to use the reducer object as a porp in the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);
