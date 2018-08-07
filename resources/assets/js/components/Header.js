import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tab } from '@material-ui/core/';
import { Subject, School, Person } from '@material-ui/icons/';
import { grey } from '@material-ui/core/colors/';

import image from '../../img/logo.svg';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 2 + 'rem'
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




function Header(props) {
  const { classes } = props;
  let style_type = "content_wrapper";
  if (props.minimalized){
    style_type = "content_wrapper_minimalized"; 
  }
  return (
    <div className={classes.root} >
      <AppBar position="static" color="default" className={ style_type }>
        <Toolbar variant="dense">

          <Link to="/" style={{ marginRight: 'auto' }}>
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

          <Link to="/signin">
            <Tab 
              className={classes.TabHover} 
              value="login" 
              classes={{ wrapper: classes.wrapper }} 
              icon={<Person />} 
              label="Войти" 
            />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(Header) && withStyles(styles)(Header);


