import React from 'react';
import { Layout, Card } from 'element-react'

import RootTable from '../RootTable/RootTable'
import TreeL from '../Tree/TreeL'
import ButtonGroup from '../ButtonGroup/ButtonGroup'

let nbps = {
    width: '10px',
    height: '10px'
}

export default class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelPosition: 'rigth',
            form: {
                PK:10086
            },
            counts: 0
        };
        this.FormsChange = this.FormsChange.bind(this)
    }

    FormsChange(form) {
        // console.log(form)
        this.setState({
            form: Object.assign(this.state.form, form),
            counts: 1
        })
    }
    Refresh(){
        this.setState({
            counts:0
        })
    }
    render() {
        const form = this.state.form
        const counts = this.state.counts
        return (
            <div>
                <Layout.Row>
                    <Layout.Col md="8" sm="8" lg="6">
                        <ButtonGroup Datas={form} Refresh={this.Refresh.bind(this)}></ButtonGroup>
                        <TreeL FormsChange={this.FormsChange} Counts={counts}></TreeL>
                    </Layout.Col>
                    <Layout.Col md="16" sm="16" lg="18">
                        <Layout.Col md="3" sm="3" lg="3">
                            <div style={nbps}></div>
                        </Layout.Col>
                        <Layout.Col md="18" sm="18" lg="18">
                            <Card className="box-card">
                                <RootTable
                                    Forms={form}>
                                </RootTable>
                            </Card>
                        </Layout.Col>
                        <Layout.Col md="3" sm="3" lg="3"></Layout.Col>
                    </Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}


