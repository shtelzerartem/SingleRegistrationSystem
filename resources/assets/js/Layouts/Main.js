import React, { Component } from "react";
import Header  from '../components/Header';
import LoginBlock from '../components/LoginBlock';
import { browserHistory } from 'react-router';
import Grid from '@material-ui/core/Grid';

export default class Main extends Component{
    componentDidMount() {
        browserHistory.push('/');
    }
    render(){
        return(
            <div>
                    <Header />
                    <div className="content_wrapper">
                    <Grid container spacing={24} style={{  display: 'flex' }}>
                        <Grid item lg={4} md={5} xs={12} >
                            <LoginBlock />
                        </Grid>
                        <Grid item lg={8} md={5} xs={12} >
                            <h1>Olympiads</h1>
                        </Grid>
                    </Grid>
                    </div>
            </div>
        );
    }
}