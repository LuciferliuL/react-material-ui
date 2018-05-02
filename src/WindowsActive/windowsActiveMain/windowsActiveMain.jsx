import React from 'react';
import { Card, Button, Input, Layout } from 'element-react'
import ActiveTable from '../ActiveTable/ActiveTable'

export default class windowsActiveMain extends React.Component {
    render() {
        return (
            <Layout.Row>
                <Card className="box-card"
                    header={
                        <div className="clearfix">
                            <span style={{ "lineHeight": "36px" }}>卡片名称</span>
                            <span style={{ "float": "right" }}>
                                <Input 
                                size="large" 
                                placeholder="请输入内容"
                                append={<Button type="primary" icon="search">搜索</Button>}/>
                            </span>
                        </div>
                    }>
                    <ActiveTable></ActiveTable>
                </Card>
            </Layout.Row>


        )
    }
}