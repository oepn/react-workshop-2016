import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import WordList from '../app/components/WordList';

describe('<WordList/>', () => {
    it('displays a list of words', () => {
        const wrapper = shallow(
            <WordList initialWords={['one', 'two', 'three']}/>
        );

        expect(wrapper.render().find('li')).to.have.lengthOf(3);
    });

    it('adds a new word', () => {
        const wrapper = shallow(
            <WordList initialWords={['one', 'two', 'three']}/>
        );

        expect(wrapper.render().find('li')).to.have.lengthOf(3);

        // Click "Add a new word" button
        wrapper.find('button').simulate('click');

        expect(wrapper.render().find('li')).to.have.lengthOf(4);
    });
});
