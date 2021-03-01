import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
   margin: 0,
   padding: 0,
   boxSizing: 'border-box'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.up('sm')]: { 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{height: '10vh'}} position="relative">
          <Typography className={classes.title} variant="h6" >
            Dio Rovelino
          </Typography>
      </AppBar>
    </div>
  );
}
