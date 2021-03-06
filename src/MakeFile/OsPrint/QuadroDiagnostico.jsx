import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const useStyles = makeStyles(() => ({
  quadro: {
    padding: '5px',
    border: 1,
    borderStyle: 'solid',
    borderColor: grey[900],
  },
  quadroInterno: {
    borderColor: grey[300],
  },
}));

const QuadroDiagnosticos = (props) => {
  const classes = useStyles();

  const { numberRows } = props;

  const rows = [];
  for (let i = 0; i < numberRows; i += 1) {
    rows.push(i);
  }

  return (
    <div className={classes.quadro}>
      <div className={`${classes.quadro} ${classes.quadroInterno}`}>
        <TableContainer>
          <Table>
            <TableBody>
              {rows.map((i) => (
                <TableRow key={i}>
                  <TableCell />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>

  );
};

QuadroDiagnosticos.propTypes = {
  numberRows: PropTypes.number.isRequired,
};

export default QuadroDiagnosticos;
