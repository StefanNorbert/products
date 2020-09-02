import React from 'react';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const styles = {
            display: 'flex',
            justifyContent: 'space-between'
        };


        return (
            <div style={styles} className="productRow">
                <p style={{marginTop: 0}}>{this.props.name}</p>
                <p style={{marginTop: 0}}>${this.props.price}</p>
            </div>
        );
    }
}

export default ProductRow;
