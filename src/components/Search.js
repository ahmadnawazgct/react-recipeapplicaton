import React, { Component } from 'react';

export default class Search extends Component{
    render(){
        const { handleChange, handleSubmit, search } = this.props;
        return (
            <div className="container">
                <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                    <h1 className="text-capitalize text-slanted">
                    search recipes with
                    <strong className="text-orange">food2fork</strong>
                    </h1>
                    <form className="mt-4">
                    <label htmlFor="search" className="text-capitalize">
                        types recipes separated by comma
                    </label>
                    <div className="input-group">
                        <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="chicken, onion, carrots"
                        />
                        <button
                        type="submit"
                        className="input-group-text bg-primary text-light"
                        onClick={handleSubmit}
                        >
                        <i className="fas fa-search" />
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}