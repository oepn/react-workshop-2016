import React from 'react';

function List(props) {
    return (
        <ul>
            {props.items.map(function(item, i) {
                return <li key={i}>{item}</li>
            })}
        </ul>
    );
}

List.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default List;
