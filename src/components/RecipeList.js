import React, { Component } from 'react';
import Recipe from '../components/Recipe';

export default class RecipeList extends Component{
    render(){
        return (
        <div>
            <h6>Hello from Recipe list</h6>
            <Recipe />
        </div>
        );
    }
}