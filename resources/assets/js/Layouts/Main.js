import React, { Component } from "react";
import Header  from '../components/Header';
import LoginBlock from '../components/LoginBlock';
import { browserHistory } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Theme from '../components/Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default class Main extends Component{
    componentDidMount() {
        browserHistory.push('/');
    }
    render(){
        return(
            <div>
                <MuiThemeProvider theme={Theme}>
                    <Header />
                    <div className="content_wrapper">
                    <Grid container spacing={24} >
                        <Grid item xs={4}>
                            <LoginBlock />
                        </Grid>
                        <Grid item xs={8}>
                            <h1>Olympiads</h1>
                        </Grid>
                    </Grid>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}