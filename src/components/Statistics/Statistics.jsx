import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={styles.wrap_stat}>
        <p>
          Good <span className={styles.textStat}>{good}</span>{' '}
        </p>
        <p>
          Neutrals <span className={styles.textStat}>{neutral}</span>
        </p>
        <p>
          Bad <span className={styles.textStat}>{bad}</span>
        </p>
        <p>
          Total <span className={styles.textStat}>{total}</span>
        </p>
        <p>
          Positive feedback{' '}
          <span className={styles.textStat}>{positivePercentage} %</span>
        </p>
      </div>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
