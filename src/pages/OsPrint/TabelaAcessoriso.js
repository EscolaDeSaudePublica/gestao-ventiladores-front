import React from 'react';
import {
  withStyles,
  makeStyles
} from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper
} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import {grey} from "@material-ui/core/colors";

const greyColor = grey[300];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: greyColor,
    fontWeight: 'bolder',
    border: 1,
    borderColor: greyColor,
    borderStyle: 'solid',
    paddingTop: '5px',
    paddingBottom: '5px',
    height: '24px',
    textAlign: 'center'
  },
  body: {
    fontSize: 12
  },
}))(TableCell);

const StyledTd = withStyles(() => ({
  body: {
    border: 1,
    borderColor: greyColor,
    borderStyle: 'solid',
    paddingTop: '5px',
    paddingBottom: '5px',
    height: '24px',
    fontSize: 12
  }
}))(TableCell);


const useStyles = makeStyles({
  table: {
    width: '100%',
    border: 1,
    borderColor: greyColor,
    borderStyle: 'solid',
  },
  quadro: {
    border: 1,
    borderColor: grey[900],
    borderStyle: 'solid',
    padding: '5px'
  }
});

export default function TabelaAcessoriso (props) {
  const classes = useStyles();

  if (!props || !props.equipamento) return (<div></div>);

  function createData (descricao, acompanha, quantidade, estado_de_conservacao) {
    return {descricao, acompanha, quantidade, estado_de_conservacao};
  }

  const acessorios = props.equipamento.triagem.acessorios || [];
  const rows = [...acessorios];
  if (acessorios.length < 15) {
    for (let i = 0; i < (15 - acessorios.length); i++) {
      rows.push(createData('', '', '', ''));
    }
  }

  return (
    <div className={classes.quadro}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Descrição</StyledTableCell>
              <StyledTableCell>Acompanha</StyledTableCell>
              <StyledTableCell>Qtde</StyledTableCell>
              <StyledTableCell>Estado de Conservação</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row, index) => (
                <TableRow key={index}>
                  <StyledTd
                    component="th"
                    scope="row"
                  >
                    {row.descricao}
                  </StyledTd>
                  <StyledTd>{row.acompanha === true ? 'Sim' : '-'}</StyledTd>
                  <StyledTd>{row.quantidade || ''}</StyledTd>
                  <StyledTd>{row.estado_de_conservacao || ''}</StyledTd>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}