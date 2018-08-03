import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, TextField } from '@material-ui/core/';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'container',
    },
    card: {
        minWidth: 275,
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
    button: {
        marginLeft: 'auto',
        marginBottom: 1 + 'rem',
    }
};

function LoginBlock(props) {
  const { classes } = props;

  return (
    <div>
        <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
            <CardContent>
                <Typography variant="display1" gutterBottom color="secondary" style={{ marginBottom: 0, fontWeight: "bold" }}>
                    Единая Система Регистрации
                </Typography>
                <Typography className={classes.title} variant="headline" gutterBottom color="textSecondary">
                    на олимипады
                </Typography>
                
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
            <CardActions>
                <Button variant="contained" color="primary" className={classes.button} size="medium">
                    Вход
                </Button>
            </CardActions>
            </Card>
        </form>
    </div>
  );
}

LoginBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginBlock);