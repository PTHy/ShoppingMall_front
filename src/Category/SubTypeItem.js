import React from 'react';

const SubTypeItem = (props) => {
    return (
        <li onClick={props.handleClick.bind((props.subType.id), this)}>
            { props.subType.name }
        </li>
    );
};

export default SubTypeItem;