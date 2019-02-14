import { GET_MENU} from '../constants';
  
  const initialState = {
    menu: []
  };
  
  const menuReducer = (state = initialState, action) => {
    switch (action.type){
      case GET_MENU:
        return {
          ...state,
          menu: action.payload,
        };
      default:
        return state;
    }
  };
  export default menuReducer;