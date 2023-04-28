import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
  render() {
    return (
      <div className={styles.conteiner}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
