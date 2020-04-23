import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function DadosDestinatario(props) {
  
  const {update} = props;

  const updateParent = (event) => {
    event.preventDefault();
    const doc = {};
    doc[event.target.name] = event.target.value;
    update(doc);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        2. Dados do Destinatário
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={updateParent}
            name="unidade_instituicao_Destino"
            id="unidadeInstituicaodestino"
            label="Unidade/Instituição de Destino"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={updateParent}
            id="cidadeDeDestino"
            name="cidade_Destino"
            label="Cidade de Destino"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            onChange={updateParent}
            id="cnpjDaunidadeDedestino"
            name="cnpj_unidade_destino"
            label="CNPJ da Unidade/Instituição de Destino"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={updateParent}
            name="endereco_destino"
            id="endereçoDeDestino"
            label="Endereço de Destino"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}