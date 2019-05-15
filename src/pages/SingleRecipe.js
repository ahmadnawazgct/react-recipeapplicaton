import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleRecipe extends Component{
    constructor(props){
        super(props);
        const id = this.props.match.params.id;
        console.log(id);
        this.state={
            recipe:{},
            id,
            loading:true
        }
    }
    async componentDidMount(){
        const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;
        try{
            const response = await fetch(url);
            console.log(response);
            const responseData = await response.json();
            console.log(responseData);
            this.setState({
                recipe:responseData.recipe,
                loading:false
            })
        }
        catch (error){
            console.log(error)
        }
        
    }
    render(){
    if (this.state.loading === true) {
        return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 mt-3">
                    <h2 className="text-capitalize text-orange">
                        loading recipe......
                    </h2>
                    </div>
                </div>
                </div>
            );
            }
    
        const {
          image_url,
          ingredients,
          publisher,
          publisher_url,
          title,
          source_url
        } = this.state.recipe;
        
        return (
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6">
                <Link
                  to="/recipes"
                  className="btn btn-warning text-uppercase my-5"
                >
                  back to recipe list
                </Link>
                <div>
                  <img
                    src={image_url}
                    alt="recipe"
                    style={{ maxHeight: "30rem", width:"100%" }}
                  />
                </div>
              </div>
              <div className="col-10 mx-auto col-md-6 my-5">
                <h6 className="text-uppercase">{title}</h6>
                <h6 className="text-slanted text-warning">
                  provided by {publisher}
                </h6>
                <a
                  href={publisher_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-capitalize mt-2 mx-2"
                >
                  publisher webpage
                </a>
                <a
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success text-capitalize mt-2"
                >
                  recipe url
                </a>
                <ul className="list-group mt-4">
                  <h2 className="text-capitalize mt-3 mb-4">ingredients</h2>
                  {ingredients.map((item, index) => (
                    <li key={index} className="list-group-item text-slanted text-capitalize">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
    }
}