import React from 'react';

import data from '../data';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
       console.log('ProductTable componentDidMount');
    }

    componentWillUnmount(){
       console.log('ProductTable componentWillUnmount');
    }


    render() {
        const headerStyles = {
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bolder'
        };

        return (
            <div>
                <div style={headerStyles} className="headerRow">
                    <p>Name</p>
                    <p>Price</p>
                </div>
                <ProductCategoryRow category={data[0].category} />
                <ProductRow name={data[0].name} price={data[0].price}/>
            </div>
        );
    }
}

export default ProductTable;
