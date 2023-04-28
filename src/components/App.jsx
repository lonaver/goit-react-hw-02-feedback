import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCountFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;
  countPositiveFeedbackPercentage = (total, good) =>
    Math.round((good / (total === 0 ? 1 : total)) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      good
    );
    const visible = good === 0 && neutral === 0 && bad === 0 ? true : false;
    return (
      <>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleCountFeedback}
          ></FeedbackOptions>

          <h2>Statistics</h2>
          {visible ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}
export default App;
