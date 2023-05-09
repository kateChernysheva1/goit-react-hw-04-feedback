import './FeedbackOptions.css';

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
