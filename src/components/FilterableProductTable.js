import React from 'react';

import products from '../data';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
    onFilterChange = (name, value) => {
        this.setState(
            {
                [name]: value
            }
        );
    };

    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
            ,isOnlyStock: false
        };
    }

    render() {
        const filterText = this.state.filterText;
        const isOnlyStock = this.state.isOnlyStock;
        let filteredProducts = products;
        if(filterText){
            filteredProducts = filteredProducts.filter(product => product.name.indexOf(filterText) > -1);
        }
        if(isOnlyStock){
            filteredProducts = filteredProducts.filter(product => product.inStock);
        }


        const styles = {
            width: '400px',
            padding: '10px',
            backgroundColor: '#eff'
        };
        return (
            <div style={styles} className="filterableProductTable">
                <SearchBar onChange={this.onFilterChange} filterText={this.state.filterText} isOnlyStock={this.props.isOnlyStock}/>
                <ProductTable products={filteredProducts}/>
            </div>
        );
    }
}

export default FilterableProductTable;
