import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Search..."/>
                <input type="checkbox" id="onlyStock"/>
                <label htmlFor="onlyStock">Only show products in stock</label>
            </form>
        );
    }
}

export default SearchBar;
