import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const EditProduct = (props) => {
	const history = useHistory();
	const [product, setProduct] = useState({title:'', description:'',price:'',category:''});

	useEffect(() => {
		getProduct();
	}, [])

	const { id } = useParams();

	const getProduct = async () => {
		const loadProd = await axios.get(`http://localhost:3001/products/${id}`);
		setProduct(loadProd.data);
	}

	const {title, description, price, category} = product

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setProduct({
			...product, [name]:value
		});
	}

	const handleSubmit = async e =>{
		e.preventDefault();
		await axios.put(`http://localhost:3001/products/${id}`, product)
		history.push('/')
	}

	return(
		<>
			<h1>Edit Product</h1>
			<form onSubmit={handleSubmit}>
			  <div className="form-row">
			    <div className="form-group col-md-12">
			      <label htmlFor="inputTitle">Title</label>
			      <input type="text" name="title" id="inputTitle" className="form-control" placeholder="Title" onChange={handleChange} value={title} />
			    </div>
			     <div className="form-group col-md-12">
			      <label htmlFor="inputCategory">Category</label>
			      <select id="inputCategory" name="category" className="form-control" onChange={handleChange} value={category}>
			        <option value="">Choose...</option>
			        <option value="men clothing">men clothing</option>
			        <option value="ladies clothing">Ladies clothing</option>
			      </select>
			    </div>
			    <div className="form-group col-md-12">
				    <label htmlFor="inputDescription">Description</label>
	    			<textarea className="form-control" name="description" placeholder="Description" id="inputDescription" onChange={handleChange} value={description}></textarea>
    			</div>
    			<div className="form-group col-md-12">
			      <label htmlFor="inputPrice">Price</label>
			      <input type="text" name="price" className="form-control" placeholder="Title" id="inputPrice" onChange={handleChange} value={price}/>
			    </div>
			  </div>
			  <button type="submit" className="btn btn-primary">Edit Product</button>
			</form>
		</>
	)
}

export default EditProduct