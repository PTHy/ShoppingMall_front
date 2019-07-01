import React from 'react';
import {Link} from 'react-router-dom'

const TypeListItem = (props) => {
    return (
        <Link to={`/category/${props.item.id}`}>
            <li onClick={props.handleClick.bind((props.item.id),this)}>
                { props.item.name }
            </li>
        </Link>
    );
};

export default TypeListItem;