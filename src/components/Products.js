
import React from 'react';
import { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import Product from './Product';

const Products = () => {
	const { products} = useContext(ProductsContext)
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					
					key={product.id}
					product={product}

				/>
			))}
		</div>
	);
};

export default Products;
