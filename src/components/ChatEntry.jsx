import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

// presentational component?

const ChatEntry = (props) => {
  return (
    //using article since you can forward a message independently of the rest of the chat
    <article className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        {/* TimeStamp component recieves timstamp from JSON as props.timeStamp & converts it */}
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like">🤍</button>
      </section>
    </article>
  );
};


ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
