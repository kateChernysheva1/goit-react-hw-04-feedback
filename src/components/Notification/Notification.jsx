import './Notification.css';

export function Notification({ message }) {
  return (
    <>
      <p className="message">{message}</p>
    </>
  );
}
