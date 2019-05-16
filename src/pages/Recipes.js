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
        recipes: recipeData,
        search: '',
        url: `https://www.food2fork.com/api/search?key=${
        process.env.REACT_APP_API_KEY
        }`,
        base_url: `https://www.food2fork.com/api/search?key=${
        process.env.REACT_APP_API_KEY
        }`,
        query:'&q=',
        error:''
        };
        async getRecipe() {
            try {
                const data = await fetch(this.state.url);
                const jsonData = await data.json();
                if(jsonData.recipes.length === 0) {
                    this.setState({
                        error:`sorry! your search result did not get any recipes,
                        please try again latter or press search button to get more recipes`
                    })
                }
                else {
                this.setState({
                recipes: jsonData.recipes
                    });
                }
            
                } catch (error) {
                    console.log(error);
                }
            }
                componentDidMount() {
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
                const { base_url, query, search } = this.state;
                this.setState({
                url: `${base_url}${query}${search}`,
                search:''
                }, ()=>this.getRecipe());
                };
                render() {
                return (
                  <>
                    <Search
                      search={this.state.search}
                      handleChange={this.hangelChange}
                      handleSumbit={this.handleSumbit}
                    />
                    {this.state.error ? (
                      <section>
                        <div className="row">
                          <div className="col">
                            <h2 className="text-orange text-uppercase text-slanted">
                              {this.state.error}
                            </h2>
                          </div>
                        </div>
                      </section>
                    ) : (
                      <RecipeList
                        recipes={this.state.recipes}
                      />
                    )}
                  </>
                );
                }
            }