import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [state, updateState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const getKeys = () => {
    return Object.keys(state);
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((ac, el) => ac + el, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total) return Math.round((state.good / total) * 100);
    else return 0;
  };

  const onLeaveFeedback = e => {
    const { name } = e.target;

    let goodStart = 0;
    let neutralStart = 0;
    let badStart = 0;

    switch (name) {
      case 'good':
        goodStart += 1;
        break;
      case 'neutral':
        neutralStart += 1;
        break;
      case 'bad':
        badStart += 1;
        break;

      default:
        console.warn('Нет имени!');
        break;
    }

    updateState(prev => ({
      good: prev.good + goodStart,
      neutral: prev.neutral + neutralStart,
      bad: prev.bad + badStart,
    }));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={getKeys()} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 && (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}

        {countTotalFeedback() === 0 && (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}
