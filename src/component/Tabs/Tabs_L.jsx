import React from 'react'
import {Tabs} from 'element-react';

import Tree_L from '../Tree/Tree_L'
export default class Tabs_L extends React.Component {
    render() {
        return (
            <Tabs activeName="1" onTabClick={(tab) => console.log(tab.props.name)}>
                <Tabs.Pane label="用户管理" name="1">
                    <Tree_L></Tree_L>
                </Tabs.Pane>
                <Tabs.Pane label="配置管理" name="2">配置管理</Tabs.Pane>
                <Tabs.Pane label="角色管理" name="3">角色管理</Tabs.Pane>
                <Tabs.Pane label="定时补偿任务" name="4">定时补偿任务</Tabs.Pane>
            </Tabs>
        )
    }
}