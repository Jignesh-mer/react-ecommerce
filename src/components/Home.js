import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Card = (props) => {
	const data = props.product
	console.log('data', props)
	let text = data.description;
	text = text.substring(0,100) + "...";

	let title = data.title;
	title = title.substring(0,20) + "...";

	return(
		<div className="col-md-4" style={{"marginBottom": "20px"}}>
			<div className="card" style={{width: "18rem"}}>
			  <img className="card-img-top" src={data.image} alt="Card image cap" style={{"maxHeight": "250px", "minHeight": "250px"}}/>
			  <div className="card-body">
			    <h5 className="card-title">{title}</h5>
			    <div>${data.price}</div>
			    <p className="card-text">{text}</p>
			    <div style={{"marginBottom": "10px"}}>
			    <button onClick={() => props.addToCarthandler(data)} className="btn btn-success">Add To Cart</button>
			    </div>
			    <div>
					<button onClick={() => props.removeToCarthandler()} className="btn btn-danger">Remove To Cart</button>
				</div>
				<div className="btn-group" style={{"marginTop": "10px"}}>
					<Link to={`product/edit/${data.id}`} className="btn btn-success">Edit</Link>
					<button onClick={() => props.deleteProduct(data.id)} className="btn btn-danger">Delete</button>
				</div>
			  </div>
			</div>
		</div>
	)
}

const Home = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, [])

	const getProducts = async () => {
		const loadProducts = await axios.get('http://localhost:3001/products');
		setProducts(loadProducts.data);
	} 

	const deleteProduct = async (id) => {	
		await axios.delete(`http://localhost:3001/products/${id}`);
		getProducts();
	}

	const productGrid = products.map((product) => 
		<Card product={product} key={product.id} addToCarthandler={props.addToCarthandler} removeToCarthandler={props.removeToCarthandler} deleteProduct={deleteProduct}/>
	);

	return(
		<>
			<div style={{marginLeft:"auto", display:'block'}}>
				<Link to='/product/add'>Add Product</Link>
			</div>
			<h1>Home Component {props.cardData.length}</h1>
			<div className="row">
				{productGrid}
			</div>
		</>
	)
}

export default Home