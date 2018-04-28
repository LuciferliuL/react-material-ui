import React from 'react';
import { Dialog, Button } from 'element-react'
import 'isomorphic-fetch'
import RootTable from './RootTable'
import { getTime } from '../BaseFun/BaseFun'
export default class RootTableDiaLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible3: false,
            data: {
                Action: '',
                Author: '',
                BranchID: "STD",
                Caption: '',
                Catalog: "GOS",
                CreateTime: getTime(),
                DeleteFlag: 0,
                DisplayMode: null,
                FK: null,
                FrameType: 0,
                GuidString: null,
                ImageKey: null,
                LastModifyTime: getTime(),
                LastUpdater: null,
                LevelString: null,
                LineID: -1,
                MenuName: '',
                Note: '',
                OrderIndex: null,
                OriginalGuidString: 0,
                PK: -1,
                Param1: '',
                Param2: '',
                SoftSystemCode: null,
                Tag: null,
                Version: 1,
                WorkFlowGuid: null,
                WorkFlowState: null,
                ParentLevelString: 0
            }
        }
    }
    handleChange(key, value) {
        this.setState({
            data: Object.assign(this.state.data, { [key]: value })
        });
    }
    clearData() {
        this.setState({
            data: {
                Action: '',
                Author: '',
                BranchID: "STD",
                Caption: '',
                Catalog: "GOS",
                CreateTime: '',
                DeleteFlag: 0,
                DisplayMode: null,
                FK: null,
                FrameType: 0,
                GuidString: null,
                ImageKey: null,
                LastModifyTime: '',
                LastUpdater: null,
                LevelString: null,
                LineID: -1,
                MenuName: '',
                Note: '',
                OrderIndex: null,
                OriginalGuidString: 0,
                PK: -1,
                Param1: '',
                Param2: '',
                SoftSystemCode: null,
                Tag: null,
                Version: 1,
                WorkFlowGuid: null,
                WorkFlowState: null,
                ParentLevelString: 0
            }
        })
    }
    //有数据的改变就可以使用
    componentWillReceiveProps(nextprops){
        // console.log(nextprops)
        if(nextprops.RootData.PK === 2){
            this.setState({
                data:nextprops.RootData.form
            })
        }
    }
    render() {
        const RootData = this.props.RootData//包含所有数据      
        //RootData.PK为0就是新增   为PK就是上一个带来的PK
        if (RootData.PK === 0) {
            const data = this.state.data//空数据
            return (
                <Dialog
                    title="添加根"
                    visible={RootData.dialogVisible}
                    onCancel={(e) => { this.props.ChooseVisible(); this.clearData() }}
                >
                    <Dialog.Body>
                        <RootTable Forms={RootData} data={data} handleChange={this.handleChange.bind(this)}></RootTable>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={(e) => { this.props.ChooseVisible(); this.clearData() }}>取 消</Button>
                        <Button type="primary" onClick={this.Submits.bind(this)} nativeType='submit'>确 定</Button>
                    </Dialog.Footer>
                </Dialog>
            )
        } else if (RootData.PK === 1) {
            const data = this.state.data//空数据
            return (
                <Dialog
                    title="添加下级"
                    visible={RootData.dialogVisible}
                    onCancel={(e) => { this.props.ChooseVisible(); this.clearData() }}
                >
                    <Dialog.Body>
                        <RootTable Forms={RootData} data={data} handleChange={this.handleChange.bind(this)}></RootTable>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={(e) => { this.props.ChooseVisible(); this.clearData() }}>取 消</Button>
                        <Button type="primary" onClick={this.Submits.bind(this)} nativeType='submit'>确 定</Button>
                    </Dialog.Footer>
                </Dialog>
            )
        } else if (RootData.PK === 2) {
            return (
                <Dialog
                    title="编辑"
                    visible={RootData.dialogVisible}
                    onCancel={(e) => { this.props.ChooseVisible(); this.clearData() }}
                >
                    <Dialog.Body>
                        <RootTable Forms={RootData} data={RootData} handleChange={this.handleChange.bind(this)}></RootTable>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={(e) => { this.props.ChooseVisible(); this.clearData() }}>取 消</Button>
                        <Button type="primary" onClick={this.Submits.bind(this)} nativeType='submit'>确 定</Button>
                    </Dialog.Footer>
                </Dialog>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    Submits(e) {
        console.log(this.state.data)
        // let myHeaders = new Headers();
        // myHeaders.append('Content-Type', 'application/json');
        // let request = new Request('./api', {
        //     method: 'POST',
        //     mode: 'cors',
        //     body: JSON.stringify(this.state.data),
        //     headers: myHeaders
        // });
        // fetch(request)
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result)
        //         this.props.ChooseVisible()
        //     })
        //     .catch(res => {
        //         console.log(res)
        //     })

    }
}