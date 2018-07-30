import  React, { Component } from 'react';
import { Tab, withStyles } from '@material-ui/core/';
import { Subject, School } from '@material-ui/icons/';
import grey from '@material-ui/core/colors/grey';
import { BrowserRouter as Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class Links extends Component {
    render() {
        let styles = {
            TabHover: {
                minHeight: 48,
                opacity: 1,
                color: grey[900],
                textTransform: "none",
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
        return (
            <div>
                <Link to="/olympiads">
                <Tab 
                style={styles.TabHover} 
                value="olympiads" 
                wrapper={ styles.wrapper }
                icon={<Subject />} 
                label="Олимпиады" 
                    />
                </Link>

                <Link to="results">
                    <Tab 
                    style={styles.TabHover} 
                    value="results" 
                    wrapper={ styles.wrapper }
                    icon={<School />} 
                    label="Результаты" 
                    />
                </Link>

                <Link to="/login">
                    <Tab style={styles.TabHover} value="login" label="Войти" />
                </Link>
            </div>
        );
    }
}