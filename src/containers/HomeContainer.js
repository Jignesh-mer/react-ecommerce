import {connect} from 'react-redux'
import HomeContainer from '../components/Home'
import {addToCart, removeToCart} from '../services/actions/action'

const mapStateToProps = state => ({
	cardData:state.cartItems
})

const mapDispatchToProps = dispatch => ({
	addToCarthandler: data=>dispatch(addToCart(data)),
	removeToCarthandler: data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)