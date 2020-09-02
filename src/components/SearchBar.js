import React from 'react';

class SearchBar extends React.Component {

    onChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.props.onChange(e.target.name, value);
    };

    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." onChange={this.onChange} value={this.props.filterText} name="filterText"/>
                <input type="checkbox" id="onlyStock" onChange={this.onChange} checked={this.props.isOnlyStock} name="isOnlyStock"/>
                <label htmlFor="onlyStock">Only show products in stock</label>
            </form>
        );
    }
}

export default SearchBar;
