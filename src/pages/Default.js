import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class Default extends Component{
    render(){
        return (
          <Header title="404" styleClass="default-hero">
            <h2 className="text-uppercase text-center text-light">
              you are on the wrong place
            </h2>
            <Link
              to="/"
              className="btn btn-secondary btn-lg mt-3 text-uppercase"
            >
              return home
            </Link>
          </Header>
        );
    }
}