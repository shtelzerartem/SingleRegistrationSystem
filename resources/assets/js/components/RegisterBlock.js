import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography, TextField, Grid } from '@material-ui/core/';
import { withRouter, Link } from 'react-router-dom';

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

function RegisterBlock(props) {
  const { classes } = props;
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
                    
                    <TextField
                        id="login-input"
                        label="Логин"
                        className={classes.textField}
                        type="text"
                        autoComplete="current-login"
                        margin="normal"
                        fullWidth
                    /><br />

                    <TextField
                        id="email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        autoComplete="current-email"
                        margin="normal"
                        fullWidth
                    /><br />

                    <TextField
                        id="password-input"
                        label="Пароль"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        fullWidth
                    /><br />
                    <TextField
                        id="password-repeat-input"
                        label="Повторите пароль"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-repeat-password"
                        margin="normal"
                        fullWidth
                    />

            </CardContent>
            <CardContent>
                <Button variant="contained" color="primary" size="medium" style={{ marginLeft: "auto", display: "flex" }}>
                    Зарегистрироваться
                </Button>
            </CardContent>
            </Card>
        </form>
    </div>
  );
}

RegisterBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(RegisterBlock) && withStyles(styles)(RegisterBlock);