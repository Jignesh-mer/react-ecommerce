import {connect} from 'react-redux'
import Header from '../components/Header'
import { resetCart } from '../services/actions/action'

const mapStateToProps = state => ({
	
})

const mapDispatchToProps = dispatch => ({
	removeCarthandler : data=>dispatch(resetCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)