import {ADD_TO_CART, REMOVE_TO_CART, RESET_CART} from '../constants.js'

export const addToCart = (data) => {
	return{
		type:ADD_TO_CART,
		data:data
	}
}

export const removeToCart = () => {
	return{
		type:REMOVE_TO_CART,
	}
}

export const resetCart = () => {
	return{
		type:RESET_CART
	}
}


// export default addToCart