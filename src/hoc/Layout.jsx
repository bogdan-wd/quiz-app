import React, {Component} from 'react';
import styles from './Layout.module.css';
import MenuToggle from './../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../components/Navigation/Drawer/Drawer';

class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState ({
      menu: !this.state.menu,
    });
  };

  menuCloseHandler = () => {
    this.setState ({
      menu: false,
    });
  };

  render () {
    return (
      <div className={styles.layout}>
        <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />
        <MenuToggle
          isOpen={this.state.menu}
          onToggle={this.toggleMenuHandler}
        />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
