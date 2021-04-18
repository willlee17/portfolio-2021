import React from 'react';
import './Button.css';
import { Button } from '@material-ui/core';
import { styles } from '../../containers/portfolioStyles';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';


const CustomButton = ({ text, icon, classes}) => {
  return (
    <Button className={classNames(classes.CustomButton, 'custom_btn')} endIcon={!!icon ? (
      <div className={classNames('btn_icon_container')}>
        {icon}
      </div>): null}>
        <span className={classNames('btn_text')}>{text}</span>
    </Button>
  )
}

export default withStyles(styles)(CustomButton); 