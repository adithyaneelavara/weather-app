import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }	,
  button: {
    margin: 25,
  },search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class WeatherCity extends Component{


	render(){
		 const { classes } = this.props;
		return <div className="row">
		 <div className="col-md-2">
            <TextField
              placeholder="City"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            </div>
            <div className="col-md-1">
	            <Button  color="inherit">
	            	<SearchIcon />
	          	</Button>
          </div>
         
          </div>
			
	}
}

WeatherCity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherCity);