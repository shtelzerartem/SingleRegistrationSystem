import React, { Component } from "react";
import Header from '../components/Header';
import RegisterBlock from '../components/RegisterBlock';
import Grid from '@material-ui/core/Grid';

export default class Register extends Component{
    render(){
        return(
            <div className="centered_block">
                <RegisterBlock />
            </div>
        );
    }
}