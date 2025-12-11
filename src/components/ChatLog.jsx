import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <section>
      {props.entries.map(message => (
        <ChatEntry
          key={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      ))}
    </section>
  );
};

ChatLog.propTypes ={
  entries: PropTypes.array.isRequired
};

export default ChatLog;