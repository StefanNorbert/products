import React from 'react';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    componentDidMount() {
        console.log("ProductRow ComponentDidMount");
    }

    componentWillUnmount() {
        console.log("ProductRow componentDidUnmount");
    }

    render() {
        const styles = {
            display: 'flex',
            justifyContent: 'space-between'
        };
        if(!this.props.inStock) {
            styles.color = 'red';
        }

        return (
            <div style={styles} className="productRow">
                <p style={{marginTop: 0}}>{this.props.name}</p>
                <p style={{marginTop: 0}}>${this.props.price}</p>
            </div>
        );
    }
}

export default ProductRow;
