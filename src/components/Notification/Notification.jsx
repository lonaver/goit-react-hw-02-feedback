import React, { Component } from 'react';
import propTypes from 'prop-types';

import styles from './Notification.module.css';

class Notification extends Component {
  render() {
    return <p className={styles.text_notyfication}>{this.props.message}</p>;
  }
}

export default Notification;

Notification.propTypes = {
  message: propTypes.string,
};
