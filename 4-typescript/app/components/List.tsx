import * as React from 'react';

interface Props {
    items:Array<any>;
}

const List:React.StatelessComponent<Props> = (props) => {
    return (
        <ul>
            {props.items.map(function (item, i) {
                return <li key={i}>{item}</li>;
            })}
        </ul>
    );
};

List.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default List;
