import React, {Component} from 'react';
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
    const navClasses = [styles.drawer];
    const BackClasses = [styles.wrapper];


    if (!this.props.isOpen) {
      navClasses.push (styles.close);
      BackClasses.push (styles.close);
    }
    return (
      <div className={BackClasses.join(' ')}>
        <nav className={navClasses.join (' ')}>
          <ul>
            {this.renderLinks ()}
          </ul>
        </nav>
      </div>
    );
  }
}
export default Drawer;
