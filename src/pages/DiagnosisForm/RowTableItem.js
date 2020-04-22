import React from 'react';
import {TableCell, TableRow} from "@material-ui/core";
import TooptipInfo from "../_common/components/TooltipInfo";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import LabelInput from "../_common/components/LabelInput";

export default function RowTableItem (props) {
  const {
    index,
    headTable,
    updateParent,
    data
  } = props;

  const radioItems = [
    {value: 'pecas', label: 'Peças'},
    {value: 'acessorio', label: 'Acessórios'}
  ];

  return (<React.Fragment>
    <TableRow>
      {
        headTable.map(
          (head, headIndex) => {
            if (head.id === 'tipo') {
              return (
                <TableCell key={headIndex}>
                  <TextField
                    select
                    label=""
                    value={data[head.id]}
                    onChange={(event) => updateParent(event, index, head.id)}
                    name={'tipo'}
                  >
                    {radioItems.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
              );
            }

            return (
              <TableCell key={headIndex}>
                <LabelInput
                  label={''} name={head.id} action={(event) => updateParent(event, index, head.id)}
                  value={data[head.id]}
                />
              </TableCell>

            );
          }
        )
      }
      <TableCell
        size={"small"}
        align={"right"}
      >
        <TooptipInfo icon={<InfoIcon/>}>
          <Typography variant={'subtitle1'}>
            {data['descricao']}
          </Typography>
        </TooptipInfo>
      </TableCell>
    </TableRow>
  </React.Fragment>);
}