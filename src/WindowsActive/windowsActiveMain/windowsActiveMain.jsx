import React from 'react';
import { Card, Button, Input, Layout } from 'element-react'
import Tables from '../../Tables/Tables'
import Paginations from '../../Tables/Pagination'
import { MathArray } from '../../Tables/MathTable'
import WindowsActiveFrom from '../WindowsActive_From/WindowsActive_From'
import 'isomorphic-fetch'
import { postFetch, getFetch, IPserver } from '../../component/BaseFun/BaseFun'
//窗体行为编辑
export default class windowsActiveMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TableData: [],//分页的数据
            InputValue: '',//搜索值
            PageNum: 0,//总条目
            data: [],//总数据
            formData: {//传递给表格的数据
                id:0,//判断增删改查  0123
                dialogVisible3: false,//是否展开弹框
                data:{}
            },
            StatData:{}//状态管理
        }
        this.table = {
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
                    label: '删除',
                    width: 180,
                    render:()=>{
                        return(
                            <span>
                                <Button type='danger' plain={true} size='small' onClick={this.Dialog.bind(this,3)}>查看</Button>
                                <Button type='danger' plain={true} size='small' onClick={this.Dialog.bind(this,1)}>删除</Button>
                            </span>
                        )
                    }
                }]
        }
        this.SonServer = this.SonServer.bind(this)
        this.SonTable = this.SonTable.bind(this)
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
    //表格点击修改数据
    SonTable(item){
        // console.log(item)
        this.setState({
            formData:{
                id:this.state.StatData.id,
                dialogVisible3:this.state.StatData.dialogVisible3,
                data:item
            }
        })
    }
    //增删改查  0123
    Dialog(id, event) {
        if (id === 0) {//增加
            this.setState({formData:{dialogVisible3: true, id:id,data:{}}})
        } else if (id === 1) {//删除
            //TODO  直接发送PK   删除
        } else {//查看
            this.setState({StatData:{dialogVisible3: true, id:id}})
        }
    }
    //子页面控制显示
    SonServer() {
        this.setState({formData:{dialogVisible3: false, id:'', data:{}}})
    }
    render() {
        const TableData = this.state.TableData
        const Columns = this.table.Columns
        const InputValue = this.state.InputValue
        const PageNum = this.state.PageNum
        const formData = this.state.formData
        return (
            <Layout.Row>
                <Card className="box-card"
                    header={
                        <div className="clearfix">
                            <span style={{ "lineHeight": "36px" }}>窗体行为编辑</span>
                            <span style={{ "float": "right" }}>
                                <Input
                                    onChange={this.valueChange.bind(this)}
                                    value={InputValue}
                                    size="large"
                                    placeholder="请输入内容"
                                    prepend={<Button type="primary" onClick={this.Dialog.bind(this, 0)}>新建</Button>}
                                    append={<Button type="primary" icon="search" onClick={this.Search.bind(this)}>搜索</Button>} />
                            </span>
                        </div>
                    }>
                    <Tables TableData={TableData} Columns={Columns} SonTable={this.SonTable}></Tables>
                    <Paginations PageNum={PageNum} pageChange={this.pageChange.bind(this)}></Paginations>
                    <WindowsActiveFrom formData={formData} SonServer={this.SonServer}></WindowsActiveFrom>
                </Card>
            </Layout.Row>
        )
    }
}