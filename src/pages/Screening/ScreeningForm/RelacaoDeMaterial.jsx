import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import { blue } from '@material-ui/core/colors';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Acessorio } from '../../../models/acessorio';
import AccessoryFormRow from './AccessoryFormRow';
import ThemeButton from '../../_common/forms/ThemeButton';
import { randomIndex } from '../../../utils';


const useStyle = makeStyles((theme) => ({
  actionGrid: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));

const acessorioModel = Acessorio();

const RelacaoDeMaterial = (props) => {
  const classes = useStyle();
  const { acessorios, items } = props;

  const accessoryFormList = acessorios.map((accessory, index) => (
    <AccessoryFormRow
      ultimo={index === accessory.length - 1}
      penultimo={index === accessory.length - 2}
      acessorio={accessory}
      index={index}
      key={randomIndex()}
      items={items}
    />
  ))

  return (
    <>
      {accessoryFormList}
      <Grid container justify="flex-end" className={classes.actionGrid}>
        <Grid item>
          {/* <ThemeButton
            onClick={adicionarAcessorio}
            bgColor={blue[600]}
            hoverColor={blue[800]}
            startIcon={<PlusOneIcon />}>
            Item
          </ThemeButton> */}
        </Grid>
      </Grid>
    </>
  );
};

RelacaoDeMaterial.defaultProps = {
  acessorios: [],
};

RelacaoDeMaterial.propTypes = {
  acessorios: PropTypes.instanceOf(Array),
};

export default RelacaoDeMaterial;
