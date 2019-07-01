import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import MainVisual from './MainVisual';
import './Home.scss'
import SideMenu from './SideMenu'
import Banner from './Banner';
import {inject,observer} from "mobx-react";

@inject('stores')
@observer
class Home extends Component {
    componentDidMount() {
        this.props.stores.productStore.fetchProducts();
    }

    render() {
        const test = this.props.stores.productStore.products;
        return (
            <div className="home-container">
                <MainVisual/>
                <nav>
                    <SideMenu title="공동 구매" products={ test }/>
                    <SideMenu title="이벤트 상품" products={ test }/>
                    <SideMenu title="이 달의 Best 상품" products={ test }/>
                </nav>
                <section>
                    <SideMenu title="베스트 추천 상품" products={ test }/>
                    <SideMenu title="추천 상품" products={ test }/>
                    <SideMenu title="인기 상품" products={ test }/>
                    <SideMenu title="특가 상품" products={ test }/>
                </section>
                <aside>
                    <Banner/>
                </aside>
            </div>
        );
    }
}

export default Home;