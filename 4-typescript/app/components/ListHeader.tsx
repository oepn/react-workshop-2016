import * as React from 'react';

interface Props {
    count:number;
}

const ListHeader:React.StatelessComponent<Props> = (props) => {
    return <h1>List <small>{props.count} items</small></h1>;
};

ListHeader.propTypes = {
    count: React.PropTypes.number.isRequired
};

export default ListHeader;
