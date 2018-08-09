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
        maxWidth: 430,
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
            login: '',
            login_error: false,
            email: '',
            email_error: false,
            password: '',
            password_error: false,
            password_repeat: '', 
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
            [name]: value.replace(/[^a-z0-9 ]/i, ''),
        });
        if (value.replace(/[^a-z0-9 ]/i, '') == value && value != ''){
            axios.post(`api/${ name }_existance`, {value})
            .then(response => {
                error = !response.data[0];
                this.setState({
                    [name + "_error"]: error,
                });
            }).catch(err => {console.log(err);});
        }
    };

    handleChangePassword(e) {
        const {name, value} = e.target;
        let error = false;
        this.setState({
            [name]: value.replace(/[^a-z0-9 ]/i, ''),
        },
        () => {
            if (value.replace(/[^a-z0-9 ]/i, '') == value && value != '' && name == 'password_repeat' && this.state.password != value){
                this.setState({
                    [name + "_error"]: true,
                });
            }
            else if (this.state.password == value){
                this.setState({
                    [name + "_error"]: false,
                });
            }
        }
        );
    };

    render() {
        const { classes } = this.props;
        return (
            
            <div>
                <Link to="/" style={{ display: 'block' }}>
                    <img src={image} style={{ height: 3 + 'rem', margin: '-3rem auto 3rem auto', display: 'block' }}/>
                </Link>
                <form className={classes.container} noValidate autoComplete="off">
                    <Card className={classes.card}>
                    <CardContent>
                        
                        <Typography variant="display1" gutterBottom color="secondary" style={{ marginBottom: 0, fontWeight: "bold" }}>
                            Регистрация
                        </Typography>

                        <FormControl className={classes.textField} error={ this.state.login_error } aria-describedby="login-error-text" fullWidth required>
                            <InputLabel htmlFor="login-error">Логин</InputLabel>
                            <Input id="login-error" value={this.state.login} name="login" type="text" maxLength="64" autoComplete="current-login" type="text" maxLength="64" onChange={this.handleChange.bind(this)} />
                            { this.state.login_error ? <FormHelperText id="login-error-text">Такой логин уже существует</FormHelperText> : null }
                        </FormControl>

                        <FormControl className={classes.textField} error={ this.state.email_error } aria-describedby="email-error-text" fullWidth required>
                            <InputLabel htmlFor="email-error">Email</InputLabel>
                            <Input id="email-error" type="email" name="email" maxLength="64" autoComplete="current-email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                            { this.state.email_error ? <FormHelperText id="email-error-text">Такой email уже зарегистрирован</FormHelperText> : null }
                        </FormControl>

                        <FormControl className={classes.textField} error={ this.state.password_error || this.state.password_repeat_error} aria-describedby="password-error-text" fullWidth required>
                            <InputLabel htmlFor="password-error">Пароль</InputLabel>
                            <Input id="password-error" type="password" name="password" maxLength="64" autoComplete="current-password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
                            { this.state.password_error ? <FormHelperText id="email-error-text">Пароль должен состоять минимум из 6 латинских символов и цифр</FormHelperText> : null }
                        </FormControl>

                        <FormControl className={classes.textField} error={ this.state.password_repeat_error } aria-describedby="password-repeat-error-text" fullWidth required>
                            <InputLabel htmlFor="password-error">Повторите пароль</InputLabel>
                            <Input id="password-repeat-error" type="password" name="password_repeat" maxLength="64" autoComplete="current-password-repeat" value={this.state.password_repeat} onChange={this.handleChangePassword.bind(this)} />
                            { this.state.password_repeat_error ? <FormHelperText id="email-error-text">Пароли не совпадают</FormHelperText> : null }
                        </FormControl>
    
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