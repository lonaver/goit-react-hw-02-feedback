import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles.wrap_feedback}>
        {options.map((btn, index) => (
          <button
            key={index}
            type="button"
            name="btn"
            className={styles.btn}
            onClick={() => {
              onLeaveFeedback(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
