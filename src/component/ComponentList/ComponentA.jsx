import React from 'react';
import {Layout} from 'element-react'

import TabsL from '../Tabs/TabsL'

import RootTable from '../RootTable/RootTable'

let nbps = {
    width:'10px',
    height:'10px'
}

export default class ComponentA extends React.Component {

    render() {
        return (
            <div>
                <Layout.Row>
                    <Layout.Col  md="8" sm="8" lg="6">   
                        <TabsL></TabsL>
                    </Layout.Col>
                    <Layout.Col md="16" sm="16" lg="18">
                        <Layout.Col md="3" sm="3" lg="3">
                            <div style={nbps}></div>
                        </Layout.Col>
                        <Layout.Col md="18" sm="18" lg="18">
                            <RootTable></RootTable>
                        </Layout.Col>
                        <Layout.Col md="3" sm="3" lg="3"></Layout.Col>                      
                    </Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}


