import React, { Component } from 'react';
import Search from '../components/Search';
import RecipeList from '../components/RecipeList';
import { recipeData } from '../data/tempList';

export default class Recipes extends Component{
    constructor(props){
        super(props)
    }
    state={
        recipes:recipeData,
        search:""
    }
    hangelChange=e=>{
        this.setState({
            search:e.target.value
        })
    }
    handleSumbit=e=>{
        e.preventDefault();
    }
    render(){
        return(
            <>
                <Search  
                    recipes={this.state.search}
                    handleChange={this.hangelChange}
                    handleSumbit={this.handleSumbit}
                />
                <RecipeList recipes={this.state.recipes} />
            </>
        )
    }
}