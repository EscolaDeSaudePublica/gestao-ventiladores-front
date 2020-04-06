import React from 'react'
import grey from '@material-ui/core/colors/grey'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  planodefundo: {
    backgroundColor: grey[900],
    width: '100%',
    padding: '1rem',
    color: 'white',
    fontWeight: 'bolder',
    textTransform: 'capitalize',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    marginBottom: '10px'
  },
  texto: {
    fontSize: '12pt'
  },
  osTexto: {
    fontSize: '14pt'
  },
  titleTexto: {
    fontSize: '20pt'
  },
  caixaCentral: {
    paddingLeft: '10px',
    paddingRight: '10px',
    height: '100%'
  },
  bordarCaixaCental: {
    borderTop: 0,
    borderBottom: 0,
    borderLeft: 1,
    borderRight: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    height: '100%'
  },
  osNumero: {
    fontSize: '26pt',
    fontWeight: 'bolder'
  }
}));

export default function Cabecalho (props) {
  const classes = useStyles();
  return (
    <div className={classes.planodefundo}>
      <Grid container justify={'space-between'} alignItems={'center'}>
        <Grid item xs="auto">
          <Typography className={classes.osTexto} align={"right"}><strong>OS N º:</strong></Typography>
          <Typography className={classes.osNumero} align={"right"}>{props.numero === '' ? '---' : props.numero}</Typography>
        </Grid>

        <Grid item xs={true}>
          <div className={classes.caixaCentral}>
            <Typography align={"center"} className={`${classes.titleTexto} ${classes.bordarCaixaCental}`}><strong>CENTRAL DE<br/>VENTILADORES</strong></Typography>
          </div>
        </Grid>
        <Grid item xs="auto">
          <Typography className={classes.texto} align={"left"}><strong>{props.datahora.split(' ')[0]}</strong><br/>{props.datahora.split(' ')[1]}</Typography>
          <Typography className={classes.texto} align={"left"}><strong>Página</strong> {props.pagina}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}