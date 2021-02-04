import React, { Component } from 'react'
import ToggleListCard from './ToggleListCard';

export default class Category extends Component { 
    constructor(props) {
        super();
        };

    render() {
        return (
            <div>
                <h2>Find all market prices</h2>
                <p>Select one of the categories in the dropdown and click away..!</p>
                <ToggleListCard />
            </div>
        )
    }
}
