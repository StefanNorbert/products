import React from 'react';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="productRow">
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
            </div>
        );
    }
}

export default ProductRow;
