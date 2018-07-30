import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tab, Typography } from '@material-ui/core/';

import SvgIcon from '@material-ui/core/SvgIcon';
import { Subject, School } from '@material-ui/icons/';

import { purple, grey} from '@material-ui/core/colors/';
import { withRouter, Link } from 'react-router-dom';

import image from '../../img/logo.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  TabHover: {
    'font-size': 1 + 'rem !important',
    minHeight: 48,
    opacity: 1,
    color: grey[900],
    'text-transform': 'none',
    'text-decoration': 'none !important',
    transition: '1s',
    '&:hover':{
      transition: '1s',
    }
  },
  wrapper: {
    flexDirection: 'row',
    marginLeft: 10,
  }
};


const theme = createMuiTheme({
  typography: {
    fontFamily: 'MCWXX',
  },
  palette: {
    primary: purple,
    secondary: purple,
  }
});


function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="default" style={{ padding: '0 10% 0' }}>
        <Toolbar variant="dense">

          <Link to="/" style={{ marginRight: 'auto'}}>
            <img src={image} style={{ height: 1.5 + 'rem' }}/>
          </Link>

          <Link to="/olympiads">
            <Tab 
              className={classes.TabHover} 
              value="olympiads" 
              classes={{ wrapper: classes.wrapper }} 
              icon={<Subject />} 
              label="Олимпиады" 
            />
          </Link>

          <Link to="/results">
            <Tab 
              className={classes.TabHover} 
              value="results" 
              classes={{ wrapper: classes.wrapper }} 
              icon={<School />} 
              label="Результаты" 
            />
          </Link>

          <Link to="/login">
            <Tab className={classes.TabHover} value="login" label="Войти" />
          </Link>

        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(Header) && withStyles(styles)(Header);


