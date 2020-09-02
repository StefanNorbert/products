import React from 'react';

import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="filterableProductTable">
                <ProductTable/>
            </div>
        );
    }
}

export default FilterableProductTable;
