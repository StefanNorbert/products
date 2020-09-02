import React from 'react';

import products from '../data';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const styles = {
            width: '400px',
            padding: '10px',
            backgroundColor: '#eff'
        };
        return (
            <div style={styles} className="filterableProductTable">
                <ProductTable products={products}/>
            </div>
        );
    }
}

export default FilterableProductTable;
