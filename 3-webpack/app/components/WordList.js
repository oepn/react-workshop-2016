import React from 'react';
import ListHeader from './ListHeader';
import List from './List';

export default class WordList extends React.Component {
    static propTypes = {
        initialWords: React.PropTypes.array.isRequired
    };

    state = {
        words: this.props.initialWords
    };

    addNewWord = (e) => {
        e.preventDefault();
        this.setState({
            words: this.state.words.concat(['new word'])
        });
    };

    render = () => {
        return (
            <div className="container">
                <ListHeader count={this.state.words.length}/>
                <button className="btn btn-default" onClick={this.addNewWord}>
                    Add a new word
                </button>
                <hr/>
                <List items={this.state.words}/>
            </div>
        );
    };
}
