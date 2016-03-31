// Pass state when hot reloading
export function __reload(m) {
    if (m.root.state) {
        root.setState(m.root.state);
    }
}

// - - - - - - - - - - - - - - - -

import React from 'react';
import ReactDOM from 'react-dom';
import WordList from './components/WordList';

export let root = ReactDOM.render(
    <WordList initialWords={['foo', 'bar', 'baz', 'qux']}/>,
    document.getElementById('root')
);
