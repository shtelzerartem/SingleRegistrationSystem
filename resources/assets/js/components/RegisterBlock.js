import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography, TextField, Input, InputLabel, FormHelperText, FormControl } from '@material-ui/core/';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import image from '../../img/logo.svg';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 400,
        maxWidth: 700,
    },
    card: {
        minWidth: 275,
        width: 100 + '%',
    },
    title: {
        marginBottom: 16,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        marginBottom: 0.5 + 'rem',
    },
    link: {
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    button: {  
        display: 'flex',  
        'flex-direction': 'column',
        'justify-content': 'center',
        '& button': {
            'text-align': 'right',
            margin: '1rem 0',
        }
    },
    centered: {
        display: 'flex',  
        'flex-direction': 'column',
        'justify-content': 'center',
    }
};

class RegisterBlock extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            login: {value: '', error: false } ,
            email: {value: '', error: false } ,
            password: {value: '', error: false } ,
            password_repeat: {value: '', error: false }, 
        }
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.' + login);
    };

    handleChange(e) {
        const {name, value} = e.target;
        let error = false;
        this.setState({
            [name]: {value: value, error: error},
        });
        axios.post(`api/${ name }_existance`, {value})
        .then(response => {
            error = !response.data[0];
            this.setState({
                [name]: {error: error},
            });
        }).catch(err => {console.log(err);});
    };
    
    render() {
        const { classes } = this.props;
        return (
            
            <div >
                <Link to="/" style={{ display: 'block' }}>
                    <img src={image} style={{ height: 3 + 'rem', margin: '-3rem auto 3rem auto', display: 'block' }}/>
                </Link>
                <form className={classes.container} noValidate autoComplete="off">
                    <Card className={classes.card}>
                    <CardContent>
                        
                        <Typography variant="display1" gutterBottom color="secondary" style={{ marginBottom: 0, fontWeight: "bold" }}>
                            Регистрация
                        </Typography>

                        <FormControl className={classes.textField} error={ this.state.login.error } aria-describedby="login-error-text" fullWidth required>
                            <InputLabel htmlFor="login-error">Логин</InputLabel>
                            <Input id="login-error" value={this.state.login.value} name="login" type="text" maxLength="64" onChange={this.handleChange.bind(this)} />
                            { this.state.login.error ? <FormHelperText id="login-error-text">Такой логин уже существует</FormHelperText> : null }
                        </FormControl>
    
                            {/* <TextField
                                id="login-input"
                                label="Логин"
                                className={classes.textField}
                                value={login}
                                onChange={UpdateLogin}
                                type="text"
                                maxLength="64"
                                autoComplete="current-login"
                                margin="normal"
                                fullWidth
                            /><br /> */}
                            
                        <FormControl className={classes.textField} aria-describedby="email-error-text" fullWidth required>
                            <InputLabel htmlFor="email-error">Email</InputLabel>
                            <Input id="email-error" type="email" name="email" value={this.state.email.value} onChange={this.handleChange.bind(this)} />
                            { this.state.email.error ? <FormHelperText id="email-error-text">Такой email уже зарегистрирован</FormHelperText> : null }
                        </FormControl>
{/*                             
                            <TextField
                                id="email-input"
                                label="Email"
                                className={classes.textField}
                                // value={email}
                                maxLength="64"
                                type="email"
                                autoComplete="current-email"
                                margin="normal"
                                fullWidth
                            /><br /> */}
    
                            <TextField
                                id="password-input"
                                label="Пароль"
                                className={classes.textField}
                                // value={password}
                                maxLength="64"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                fullWidth
                            /><br />
                            <TextField
                                id="password-repeat-input"
                                label="Повторите пароль"
                                className={classes.textField}
                                // value={password_repeat}s
                                maxLength="64"
                                type="password"
                                autoComplete="current-repeat-password"
                                margin="normal"
                                
                                fullWidth
                            />
    
                    </CardContent>
                    <CardContent>
                        <Button onClick={this.handleClick} variant="contained" color="primary" size="medium" style={{ marginLeft: "auto", display: "flex" }}>
                            Зарегистрироваться
                        </Button>
                    </CardContent>
                    </Card>
                </form>
            </div>
        );
    }
}

RegisterBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(RegisterBlock) && withStyles(styles)(RegisterBlock);