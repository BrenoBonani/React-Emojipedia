import React from 'react';
import Entry from './Entry';
import emojipedia from '../emojipedia';

function CreateEntry(emojipedia) {
  return <Entry key={emojipedia.id} emoji={emojipedia.emoji} name={emojipedia.name} meaning={emojipedia.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className='dictionary'>{emojipedia.map(CreateEntry)}</dl>
    </div>
  );
}

export default App;

/* 

Novidade! Uso do dl, dt e dd. O dl é dado como definition list, usado para implementar glossários ou exibir uma lista de pares, ou até mesmo um dicionário.
Um exemplo de estrutura, seria esse:

<dl>
  <dt>Firefox</dt>
  <dd>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.</dd>

  <!-- other terms and definitions -->
</dl>

output: Firefox
        A free, open source, cross-platform, graphical web browser
        developed by the Mozilla Corporation and hundreds of volunteers.

O <dt> significa definition term e basicamente vai ser o título do que queremos explicar e o <dd> significa details discription, que vai fornecer uma defini
ção mais completa do que queremos explicar.


*/
