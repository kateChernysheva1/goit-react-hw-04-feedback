import './FeedbackOptions.css';
import PropTypes from 'prop-types';

export function Feedback({ options, onLeaveFeedback }) {
  return (
    <div className="block">
      {options.map(el => (
        <button
          className="block__button"
          key={el}
          name={el}
          type="button"
          onClick={onLeaveFeedback}
        >
          {el}
        </button>
      ))}
    </div>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
