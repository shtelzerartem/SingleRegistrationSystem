import React, { Component } from "react";
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import LoginBlock from '../components/LoginBlock';

export default class Login extends Component{
    render(){
        return(
            <div>
                <Header minimalized/>
                <div className="content_wrapper_minimalized">
                    <Grid container spacing={24} style={{  display: 'flex' }}>
                        <Grid item lg={5} md={5} xs={12} >
                            <LoginBlock title/>
                        </Grid>
                        <Grid item lg={5} md={5} xs={12} >
                            <h1>Зарегистрируйся!</h1>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}