import React, { Component } from "react";
import Header from '../components/Header';
import { browserHistory } from 'react-router';

export default class Main extends Component{
    componentDidMount() {
        browserHistory.push('/');
    }
    render(){
        return(
            <div>
                <Header />
                <h1>Main</h1>
            </div>
        );
    }
}