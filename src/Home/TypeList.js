import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import TypeListItem from './TypeListItem';

@inject('stores')
@observer
class TypeList extends Component {
    componentDidMount() {
        this.props.stores.typeStore.fetchTypes();
    }

    render() {
        let { typeStore: t } = this.props.stores;
        return (
            <div>
                <ul>
                    { t.types.map(type => <TypeListItem handleClick={this.handleTypeClick} item={type}/>)}
                </ul>
                <ul>
                    { t.subTypes.map(subType => <TypeListItem handleClick={this.handleSubTypeClick} item={subType}/>)}
                </ul>
            </div>
        );
    }

    handleTypeClick = async (id) => {
        await this.props.stores.typeStore.fetchSubTypeByType(id);
    };

    handleSubTypeClick = () => {

    };
}

export default TypeList;