import React from 'react';

export default function ComponenteFuncional() {
  const [message, setMessage] = React.useState('Oi, clique em mim!');

  return (
    <button
      onClick={() => {
        setMessage('Obrigado por me clicar :)');
      }}
    >
      {message}
    </button>
  );
}
