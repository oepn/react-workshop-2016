import React from 'react';
import ReactDOM from 'react-dom';
import WordList from './components/WordList';

ReactDOM.render(
    <WordList initialWords={['foo', 'bar', 'baz', 'qux']}/>,
    document.getElementById('root')
);
