import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getKeys = () => {
    return Object.keys(this.state);
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((ac, el) => ac + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total) return Math.round((this.state.good / total) * 100);
    else return 0;
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={this.getKeys()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}

          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
