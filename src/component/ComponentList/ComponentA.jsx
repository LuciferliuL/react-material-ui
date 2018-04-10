import React from 'react';
import {Layout} from 'element-react'

import TabsL from '../Tabs/TabsL'

export default class ComponentA extends React.Component {
    render() {
        return (
            <div>
                <Layout.Row>
                    <Layout.Col span="6">
                       <TabsL></TabsL>
                    </Layout.Col>
                    <Layout.Col span="auto">2222</Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}