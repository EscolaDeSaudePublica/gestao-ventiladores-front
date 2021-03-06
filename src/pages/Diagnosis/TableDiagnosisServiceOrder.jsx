import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { Grid, Typography } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import ActionTableList from '../_common/ActionTable/ActionTableList';
import { helperPropsColorIconButton } from '../_common/forms/ColorIconButton';
import DiagnosisFormDialog from './DiagnosisFormDialog';


const headerData = [
  { id: 'numero_ordem_servico', name: 'Ordem de Serviço' },
  { id: 'numero_de_serie', name: 'Número de Série' },
  { id: 'marca', name: 'Marca' },
  { id: 'modelo', name: 'Modelo' },
  { id: 'origem', name: 'Origem' },
  { id: 'created_at', name: 'Data de criação' },
];

const TableDiagnosisServiceOrder = (props) => {
  const {
    serviceOrderDiagnosis,
    reloadData,
  } = props;

  const [serviceOrder, setServiceOrder] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const dataTable = serviceOrderDiagnosis
    ? serviceOrderDiagnosis.map((serviceOrderDiagnosi) => {
      const item = serviceOrderDiagnosi;
      const equip = item.equipamento[0] || {};
      if (typeof (item.created_at) === 'object' && item.created_at && item.created_at.$date) {
        item.created_at = item.created_at.$date;
      }
      return {
        numero_ordem_servico: item.numero_ordem_servico,
        marca: equip.marca || '',
        modelo: equip.modelo || '',
        instituicao_de_origem: equip.instituicao_de_origem || '',
        numero_de_serie: equip.numero_de_serie || '',
        origem: equip.nome_instituicao_origem || '',
        created_at: moment.tz(new Date(item.created_at), 'America/Fortaleza').format('DD/MM/Y'),
      };
    })
    : [];

  const openFormDiagnosis = (value) => {
    setServiceOrder(
      serviceOrderDiagnosis
        .find((item) => item.numero_ordem_servico === value.numero_ordem_servico),
    );
    setOpenModal(true);
  };

  const menuOptions = [
    helperPropsColorIconButton(
      'Efetuar diagnóstico',
      openFormDiagnosis,
      'white',
      orange[600],
      orange[700],
      <EditIcon fontSize="small" />,
    ),
  ];

  return (
    <>
      <Grid container justify="space-between">
        <Grid item xs="auto">
          <Typography variant="h5" component="h5">
            Ordens de serviço com diagnóstico cadastrado
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ActionTableList
            actionIconButton
            dataTable={dataTable}
            headerTable={headerData}
            menuOptions={menuOptions}
          />
        </Grid>
      </Grid>

      <DiagnosisFormDialog
        reloadData={reloadData}
        serviceOrder={serviceOrder}
        openModal={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </>
  );
};

TableDiagnosisServiceOrder.propTypes = {
  serviceOrderDiagnosis: PropTypes.instanceOf(Array).isRequired,
  reloadData: PropTypes.func.isRequired,
};

export default TableDiagnosisServiceOrder;
