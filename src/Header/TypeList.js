import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import TypeListItem from './TypeListItem';
import './Header.scss'

@inject('stores')
@observer
class TypeList extends Component {
    componentDidMount() {
        this.props.stores.typeStore.fetchTypes();
    }

    render() {
        let {typeStore: t} = this.props.stores;
        return (
            <div className="type-list-container">
                <ul>
                    {t.types && t.types.map(type => <TypeListItem item={type} handleClick={this.handleTypeClick}/>)}
                    <li className="hidden">Hidden</li>
                </ul>
            </div>
        );
    }
    handleTypeClick = (id) => {
        console.log(id);
        this.props.stores.typeStore.fetchSubTypeByType(id);
    }
}


export default TypeList;