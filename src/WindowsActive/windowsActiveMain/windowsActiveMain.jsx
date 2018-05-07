import React from 'react';
import { Card, Button, Input, Layout } from 'element-react'
import Tables from '../../Tables/Tables'
import Paginations from '../../Tables/Pagination'
import { MathArray } from '../../Tables/MathTable'
import 'isomorphic-fetch'
import { postFetch, getFetch, IPserver } from '../../component/BaseFun/BaseFun'
//窗体行为编辑
export default class windowsActiveMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TableData: [],
            InputValue: '',
            Columns: [
                {
                    type: 'index',
                    width: 150
                },
                {
                    label: 'PK',
                    prop: 'PK'
                }, {
                    label: 'Action',
                    prop: 'Action'
                }, {
                    label: 'ActionType',
                    prop: 'ActionType'
                }, {
                    label: 'Author',
                    prop: 'Author',
                    width: 100
                }, {
                    label: 'CreateTime',
                    prop: 'CreateTime'
                }, {
                    label: 'LastModifyTime',
                    prop: 'LastModifyTime'
                }, {
                    label: 'BranchID',
                    prop: 'BranchID',
                    width: 120
                }, {
                    label: "操作",
                    prop: "address",
                    width: 250,
                    render: function () {
                        return (
                            <span>
                                <Button plain={true} type="success" size="small">查看</Button>
                                <Button plain={true} type="info" size="small">编辑</Button>
                                <Button plain={true} type="danger" size="small">删除</Button>
                            </span>
                        )
                    }
                }
            ],
            PageNum: 0,//总条目
            data: []
        }
    }

    Search() {
        // console.log(this.state.InputValue)
        let URL = 'http://' + IPserver(true) + '/api/ActionInitial/GetListActionList?BranchId=STD&strQuery=' + this.state.InputValue
        getFetch(URL, (data) => {
            // console.log(data)
            this.setState({
                PageNum: data.length,
                data: MathArray(data, 50),
                TableData: MathArray(data, 50)[0]//初始化第一次
            })
        })
    }
    valueChange(value) {//搜索框输入
        this.setState({
            InputValue: value
        })
    }
    pageChange(num) {//页码  渲染对应数据
        this.setState({
            TableData: this.state.data[num - 1]
        })
    }
    render() {
        return (
            <Layout.Row>
                <Card className="box-card"
                    header={
                        <div className="clearfix">
                            <span style={{ "lineHeight": "36px" }}>卡片名称</span>
                            <span style={{ "float": "right" }}>
                                <Input
                                    onChange={this.valueChange.bind(this)}
                                    value={this.state.InputValue}
                                    size="large"
                                    placeholder="请输入内容"
                                    append={<Button type="primary" icon="search" onClick={this.Search.bind(this)}>搜索</Button>} />
                            </span>
                        </div>
                    }>
                    <Tables TableData={this.state.TableData} Columns={this.state.Columns}></Tables>
                    <Paginations PageNum={this.state.PageNum} pageChange={this.pageChange.bind(this)}></Paginations>
                </Card>
            </Layout.Row>
        )
    }
}