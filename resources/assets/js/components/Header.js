import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tab, Typography } from '@material-ui/core/';

import SvgIcon from '@material-ui/core/SvgIcon';
import { Subject, School } from '@material-ui/icons/';

import { purple, grey} from '@material-ui/core/colors/';
import { BrowserRouter as Link} from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  TabHover: {
    minHeight: 48,
    opacity: 1,
    color: grey[900],
    "text-transform": "none",
    transition: "1s",
    '&:hover':{
      transition: "1s",
    }
  },
  wrapper: {
    flexDirection: "row",
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
      <AppBar position="static" color="default" style={{ paddingLeft: 30, paddingRight: 30}}>
        <Toolbar variant="dense">
          
          <Typography variant="title" color="inherit" className={classes.flex}>
            News
          </Typography>
          
          <Link to={"olympiads"}>
            <Tab 
              className={classes.TabHover} 
              value="olympiads" 
              classes={{ wrapper: classes.wrapper }} 
              icon={<Subject />} 
              label="Олимпиады" 
            />
          </Link>

          <Link to={"results"}>
            <Tab 
              className={classes.TabHover} 
              value="results" 
              classes={{ wrapper: classes.wrapper }} 
              icon={<School />} 
              label="Результаты" 
            />
          </Link>

          <Link to={"login"}>
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

export default withStyles(styles)(Header);

