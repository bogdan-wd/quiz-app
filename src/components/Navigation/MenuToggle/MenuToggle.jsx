import React from 'react';
import styles from './MenuToggle.module.css';

const MenuToggle = props => {
  const classes = [styles.menuToggle, 'fa'];

  if (props.isOpen) {
    classes.push ('fa-times');
    classes.push (styles.open);
  } else {
    classes.push ('fa-bars');
  }

  return <i onClick={props.onToggle} className={classes.join (' ')} />;
};

export default MenuToggle;
