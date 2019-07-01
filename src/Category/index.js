import React, {Component} from 'react';
import './Category.scss'
import SideMenu from './../Home/SideMenu'
import SubTypeList from './SubTypeList'
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Category extends Component {

    async componentDidMount() {
        await this.props.stores.typeStore.selectType(this.props.match.params.id);
        await this.props.stores.typeStore.selectSubType(1);

        console.log(this.props.stores.typeStore.selectedSubType);
    }

    render() {
        const { typeStore: t } = this.props.stores;
        return (
            <div className="category-container">
                <SubTypeList subTypes={t.subTypes} handleClick={this.handleSubTypeClick}/>
                <div className="category-header-container">
                    <img className="category-header-image" src="https://www.daviskarate.com/wp-content/uploads/2017/04/default-image.jpg" alt="으음?"/>
                    <div className="title">{ t.selectedType && t.selectedType.name }</div>
                    <div className="sub-title">서브 타이틀</div>
                </div>
                <div className="menus">
                    <SideMenu title="신상품 코너" />
                    <SideMenu title="MD 추천 상품"/>
                    <SideMenu title="인기 상품"/>
                </div>
            </div>
        );
    }

    handleSubTypeClick = async (id) => {
        this.props.stores.typeStore.selectSubType(this.props.match.params.id, id);
    }
}

export default Category;