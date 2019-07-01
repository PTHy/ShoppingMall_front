import React from 'react';
import SubTypeItem from './SubTypeItem'

const SubTypeList = (props) => {
    return (
        <ul className="sub-type-list-container">
            { props.subTypes && props.subTypes.map(subType => <SubTypeItem subType={subType} handleClick={props.handleClick}/>) }
        </ul>
    );
};

export default SubTypeList;