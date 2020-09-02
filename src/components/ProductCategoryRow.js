import React from 'react';

class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const styles = {
            fontWeight: 'bold'
        };

        return (
            <div style={styles} className="productCategory">
                <p style={{marginBottom: 0.5+'em'}}>{this.props.category}</p>
            </div>
        );
    }
}

export default ProductCategoryRow;
