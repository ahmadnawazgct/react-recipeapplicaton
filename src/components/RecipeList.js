import React, { Component } from 'react';
import Recipe from '../components/Recipe';

export default class RecipeList extends Component{
    render(){
        const { recipes } = this.props;
        return (
        <>
            <div className="container py-5">
                {/*title of page */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-uppercase text-center  mb-3">
                        <h1 className="text-slanted">recipe list</h1>
                    </div>
                    {/* end of title */}
                </div>
                <div className="row">
                {recipes.map(recipe =>(
                    <Recipe
                    key={recipe.recipe_id} recipe={recipe}
                    />
                ))}
                </div>
            </div>
        
        </>
        );
    }
}