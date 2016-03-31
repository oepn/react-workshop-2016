import React from 'react';

function ListHeader(props) {
    return <h1>List <small>{props.count} items</small></h1>;
}

ListHeader.propTypes = {
    count: React.PropTypes.number.isRequired
};

export default ListHeader;
