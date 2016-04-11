import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WordList from './components/WordList';

ReactDOM.render(
    <WordList initialWords={['foo', 'bar', 'baz', 'qux']}/>,
    document.getElementById('root')
);
