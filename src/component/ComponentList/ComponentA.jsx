import React from 'react';
import {Layout} from 'element-react'

import TabsL from '../Tabs/TabsL'
import ButtonGroup from '../ButtonGroup/ButtonGroup'

export default class ComponentA extends React.Component {
    render() {
        return (
            <div>
                <Layout.Row>
                    <Layout.Col  md="8" sm="8" lg="6">
                        <ButtonGroup></ButtonGroup>
                        <TabsL></TabsL>
                    </Layout.Col>
                    <Layout.Col span="auto">2222</Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}