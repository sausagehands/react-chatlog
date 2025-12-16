import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);

  const toggleLike = (id) => {
    setEntries(entries.map(entry =>
      entry.id === id
        ? { ...entry, liked: !entry.liked }
        : entry
    ));
  };

  const totalLikes = entries.filter(entry => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <h2>{totalLikes} ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={entries}
          onLikeToggle={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;