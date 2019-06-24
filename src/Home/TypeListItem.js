import React from 'react';

const TypeListItem = (props) => {
    return (
        <li onClick={props.handleClick(props.item.id)}>
            { props.item.name }
        </li>
    );
};

export default TypeListItem;