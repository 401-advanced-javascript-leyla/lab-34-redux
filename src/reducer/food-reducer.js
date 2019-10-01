import uuid from 'uuid';

export default (state = [], {type, payload}) => {
  switch(type){
    case 'FOOD_CREATE':
      return [...state, {name: payload, id: uuid(), timestamp: new Date(),}];
    case 'FOOD_UPDATE':
      return state.map(name=>{
        return name.id === payload.id ? {...name, name: payload.name} : name;
      });
    case 'FOOD_DELETE':
      return state.filter(name=>{
        return name.id !== payload;
      }); 
    default:
      return state;
  }

};
