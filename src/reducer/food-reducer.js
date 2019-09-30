export default (state = [], {type, payload}) => {
  switch(type){
    case 'FOOD_CREATE':
      return [...state, payload];
    case 'FOOD_UPDATE':
      return updateFood(state, payload);
    case 'FOOD_DELETE':
      return deleteFood(state, payload);
    default:
      return state;
  }

  const updateFood = (list, food) => {
    list.map((name)=>{
      name.id === food.id ? food : name
    }); 
  }

  const deleteFood = (list, food) => {
    list.filter((name)=>{
      name.id !== food.id
    }); 
  }
};
