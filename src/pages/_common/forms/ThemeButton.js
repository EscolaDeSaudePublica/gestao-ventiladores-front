import React from 'react';
import orange from "@material-ui/core/colors/orange";
import SvgIcon from "@material-ui/core/SvgIcon";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";


const ThemeButton = (props) => {
  const {children, variant, onClick, startIcon, color, bgColor, hoverColor, type} = props;

  const ColorButton = withStyles((theme) => ({
    root: {
      borderRadius: 20,
      color: color || "white",
      backgroundColor: bgColor || orange[600],
      '&:hover': {
        backgroundColor: hoverColor || orange[800],
      },
    },
  }))(Button);

  return <ColorButton
    type={type || 'button'}
    size={"large"} variant={variant || "contained"} onClick={onClick} startIcon={startIcon}
  > {children} </ColorButton>;
};

ThemeButton.defaultProps = {
  onClick: () => console.log('No Action'),
  startIcon: <SvgIcon/>
};

export default ThemeButton;