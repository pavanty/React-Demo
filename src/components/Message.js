import React, { useState } from 'react';

function Message() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <div>Message</div>
      <button onClick={() => setCount(count + 1)} >
    count
      </button>
   <p>Count: {count}</p>
      <p>reset</p>
      <button onClick={() => setCount(0)}> reset </button>   
   <button onClick={() => setName('Thank you for subscribing')}>ssubscribe</button>
   <p>{name}</p>
   
    </div>
  );
}

export default Message;
