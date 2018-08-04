import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

const SubMenu = Menu.SubMenu;

export default class MenuItem extends Component {
    handleClick(event) {
        switch (event.key) {
            case "filter:manchester":
                this.props.filter();
                break;
            case "sort:items":
                this.props.sortList();
                break;
            default:
                return;
        }
    }
    render() {
        return (
            <div>
                <Menu mode="horizontal" onClick={this.handleClick.bind(this)}>
                    <SubMenu title={<span><Icon type="swap" />Sort</span>}>
                        <Menu.Item key="sort:items">By Capacity</Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="filter" />Filter</span>}>
                        <Menu.Item key="filter:manchester">Only Manchester</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

MenuItem.propTypes = {
    filter: PropTypes.func.isRequired,
    sortList: PropTypes.func.isRequired,
};