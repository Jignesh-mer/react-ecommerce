import React from 'react'
import Button from '@material-ui/core/Button';

const Header = (props) => {
	return(
		<>
			<h1>Header Components</h1>
			<Button onClick={() => props.removeCarthandler()}>Reset Cart</Button>
		</>
	)
}

export default Header