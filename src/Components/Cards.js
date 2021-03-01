import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const useStyles = makeStyles({
  card: {
    width: '200px',
    marginTop: '50px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid rgba(0,0,0,0.2)'
  }
})
export default function Cards({profile}) {
  const classes = useStyles();

  return (
    <>
  {profile.map((set) => (
    <div key={set.id}>
      <div className={classes.card}>
        <div><PersonIcon fontSize="small"/> {set.name}</div>
        <div style={{marginTop:'5px'}}>{set.username}</div>
        <div><MailOutlineIcon />{set.email}</div>
      </div>
    </div>
  ))}

</>

  )
}
