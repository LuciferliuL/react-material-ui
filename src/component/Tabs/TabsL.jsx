import React from 'react'
import {Tabs} from 'element-react';

import TreeL from '../Tree/TreeL'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
export default class Tabs_L extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render() {
        return (
            <div>
                <ButtonGroup></ButtonGroup>
                <Tabs activeName="1" onTabClick={(tab) => console.log(tab.props.name)}>
                    <Tabs.Pane label="GOS" name="1">
                        <TreeL></TreeL>
                    </Tabs.Pane>
                    <Tabs.Pane label="DEV" name="2">配置管理</Tabs.Pane>
                    <Tabs.Pane label="MOB" name="3">角色管理</Tabs.Pane>
                    <Tabs.Pane label="PMS" name="4">定时补偿任务</Tabs.Pane>
                </Tabs>
            </div>

        )
    }
}