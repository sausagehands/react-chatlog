import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <section>
      {props.entries.map(message => (
        <ChatEntry
          key={message.id}
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onLikeToggle={props.onLikeToggle}
        />
      ))}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onLikeToggle: PropTypes.func.isRequired
};

export default ChatLog;