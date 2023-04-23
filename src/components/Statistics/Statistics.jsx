import React, { Component } from 'react';
import propTypes from 'prop-types';

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
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};
