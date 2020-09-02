import React from 'react';

class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="productCategory">
                <p>{this.props.category}</p>
            </div>
        );
    }
}

export default ProductCategoryRow;
