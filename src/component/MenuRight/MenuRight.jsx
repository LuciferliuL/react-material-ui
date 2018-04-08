import React from 'react';
import {Menu} from 'element-react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class MenuRight extends React.Component {

    onOpen() {}

    onClose() {}
    render() {
        return (
                <Menu
                    defaultActive="2"
                    className="el-menu-vertical-demo"
                    onOpen={this.onOpen
                    .bind(this)}
                    onClose={this
                    .onClose
                    .bind(this)}>
                    <Menu.SubMenu
                        index="1"
                        title={<span> <i className="el-icon-message"></i>导航一 </span>}>
                        <Menu.ItemGroup title="分组一">
                            <Menu.Item index="1-1">
                                <Link>123</Link>
                            </Menu.Item>
                            <Menu.Item index="1-2">
                                <Link>234</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="分组2">
                            <Menu.Item index="1-3">
                                <Link>345</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </Menu.SubMenu>
                    <Menu.Item index="2">
                        <i className="el-icon-menu"></i>导航二</Menu.Item>
                    <Menu.Item index="3">
                        <i className="el-icon-setting"></i>导航三</Menu.Item>
                </Menu>
        )
    }
}