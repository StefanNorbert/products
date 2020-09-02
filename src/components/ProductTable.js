import React from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    render() {
        const headerStyles = {
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bolder'
        };

        // for this to work get the products from DB ordered by category
        let lastCategory = '';
        const rows = [];
        this.props.products.forEach(product => {
            if(product.category === lastCategory){
                rows.push(
                    <ProductRow key={product.id} name={product.name} price={product.price} inStock={product.inStock}/>
                );
                return;
            }
            lastCategory = product.category;
            rows.push(
                <ProductCategoryRow key={product.category} category={product.category} />
            );
            rows.push(
                <ProductRow key={product.id} name={product.name} price={product.price} inStock={product.inStock}/>
            );
        });

        return (
            <div>
                <div style={headerStyles} className="headerRow">
                    <p>Name</p>
                    <p>Price</p>
                </div>
                {this.props.products.length
                    ? rows
                    : <p>There are no products to be displayed!</p>
                }
            </div>
        );
    }
}

export default ProductTable;
