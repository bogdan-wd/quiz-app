import React, {Component} from 'react';
import BackDrop from '../../UI/BackDrop/BackDrop';
import styles from './Drawer.module.css';

const links = [1, 2, 3];

class Drawer extends Component {
  renderLinks () {
    return links.map ((item, idx) => {
      return (
        <li key={idx}>
          <a href="#">link {item}</a>
        </li>
      );
    });
  }

  render () {
    const classes = [styles.drawer];

    if (!this.props.isOpen) {
      classes.push (styles.close);
    }
    return (
      <React.Fragment>
        <nav className={classes.join (' ')}>
          <ul>
            {this.renderLinks ()}
          </ul>
        </nav>
        {this.props.isOpen ? <BackDrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}
export default Drawer;
