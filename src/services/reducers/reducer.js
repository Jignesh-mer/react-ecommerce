import {ADD_TO_CART, REMOVE_TO_CART, RESET_CART} from '../constants.js'

// const initialState = {
// 	cardData: []
// }
		
export default function cardItems(state=[], action){
	switch(action.type){
		case ADD_TO_CART:
			return [
				...state,
				{cardData:action.data}
			]
			break;
		case REMOVE_TO_CART:
			state.pop();
			return [
				...state
			]
			break;
		case RESET_CART:
			return [
			]
			break;
		default:
			return state
			break;
	}
}

// export cardItems