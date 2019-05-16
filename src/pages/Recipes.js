import React, { Component } from 'react';
import Search from '../components/Search';
import RecipeList from '../components/RecipeList';
import { recipeData } from '../data/tempList';

export default class Recipes extends Component {
                 constructor(props) {
                super(props);
                this.getRecipe = this.getRecipe.bind(this);
                }
                 state = {
                   recipes:recipeData,
                   search: "",
                   url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`
                 };
                async getRecipe(){
                    try{
                        const data= await fetch(this.state.url);
                        console.log(data);
                        const jsonData = await data.json();
                        console.log(jsonData);
                        this.setState({
                            recipes:jsonData.recipes
                        })
                    } 
                    catch(error){
                        console.log(error);
                        
                    }
                }
                componentDidMount(){
                    this.getRecipe();
                }
                 hangelChange = e => {
                   console.log("change called");
                   this.setState({
                     search: e.target.value
                   });
                 };
                 handleSumbit = e => {
                   e.preventDefault();
                 };
                 render() {
                   return (
                     <>
                       <Search
                         search={this.state.search}
                         handleChange={this.hangelChange}
                         handleSumbit={this.handleSumbit}
                       />
                       <RecipeList
                         recipes={this.state.recipes}
                       />
                     </>
                   );
                 }
               }