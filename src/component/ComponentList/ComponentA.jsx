import React from 'react';
import {Layout} from 'element-react'

import Tabs_L from '../Tabs/Tabs_L'

export default class ComponentA extends React.Component {
    render() {
        return (
            <div>
                <Layout.Row>
                    <Layout.Col span="4">
                       <Tabs_L></Tabs_L>
                    </Layout.Col>
                    <Layout.Col span="auto">2222</Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}