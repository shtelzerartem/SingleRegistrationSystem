import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography, TextField, Grid } from '@material-ui/core/';
import { withRouter, Link } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        minWidth: 275,
        width: 100 + '%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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
    button_log: {  
        display: 'flex',  
        'flex-direction': 'column',
        'justify-content': 'center',
        '& button': {
            'text-align': 'right',
            margin: '1rem 0',
        }
    },
};

function LoginBlock(props) {
  const { classes } = props;
  return (
    <div>
        <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
            <CardContent>

            { !props.title ? (
                <div>
                    <Typography variant="display1" gutterBottom color="secondary" style={{ marginBottom: 0, fontWeight: "bold" }}>
                    Единая Система <br />Регистрации
                    </Typography>
                    <Typography className={classes.title} variant="headline" gutterBottom color="textSecondary">
                        на олимипады
                    </Typography>
                </div>
            ) : (
                <div></div>
            )}
                

                
                
                <Typography variant="display1" gutterBottom color="secondary" style={{ marginBottom: 0, fontWeight: "bold" }}>
                    Вход
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
                        id="password-input"
                        label="Пароль"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        fullWidth
                    />

            </CardContent>
            <CardContent>
                <Grid container spacing={24} >
                    <Grid item sm={6} xs={5} lg={5} className={classes.button_log} style={{ marginRight: 'auto' }}>
                        <Link to="/signup">
                            <Typography gutterBottom color="secondary" className={classes.link}>
                                Регистрация
                            </Typography>
                        </Link>
                        <Link to="/forgot_password">
                            <Typography gutterBottom color="secondary" className={classes.link}>
                                Забыли пароль?
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item sm={3} xs={4} lg={4} className={classes.button_log}>
                        <Button variant="contained" color="primary" size="medium">
                            Вход
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
            </Card>
        </form>
    </div>
  );
}

LoginBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(LoginBlock) && withStyles(styles)(LoginBlock);