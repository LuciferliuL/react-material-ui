import React from 'react';
import { Dialog, Form, Input, Button, Layout } from 'element-react';

import Selects from '../../Tables/Selects'
import Switchs from '../../Tables/Switch'
import { getTime } from '../../component/BaseFun/BaseFun'
/**
 * 1.接受id为显示增删改查  0123
 * 2.接受dialogVisible3 是否显示
 * 3.formData 显示数据
 */
export default class WindowsActiveFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                Action: '',
                Initial: "",
                InitialAssemblyRef: "",
                Notes: '',
                Text: "",
                Shortcuts: null,
                IsSingle: true,
                Module: "",
                ParamString: '',
                ActionType: "",
                Author: "",
                GuidString: null,
                OriginalGuidString: "0",
                SoftSystemCode: "GOS",
                LastUpdater: null,
                LineID: 9991,
                BranchID: "STD",
                DeleteFlag: 0,
                Note: "",
                PK: '',
                FK: -1,
                Version: 1,
                WorkFlowState: "",
                WorkFlowGuid: "",
                LastModifyTime: getTime(),
                CreateTime: getTime(),
                Tag: null
            },
            formInit: {
                Action: '',
                Initial: "",
                InitialAssemblyRef: "",
                Notes: '',
                Text: "",
                Shortcuts: null,
                IsSingle: true,
                Module: "",
                ParamString: '',
                ActionType: "",
                Author: "",
                GuidString: null,
                OriginalGuidString: "0",
                SoftSystemCode: "GOS",
                LastUpdater: null,
                LineID: 9991,
                BranchID: "STD",
                DeleteFlag: 0,
                Note: "",
                PK: '',
                FK: -1,
                Version: 1,
                WorkFlowState: "",
                WorkFlowGuid: "",
                LastModifyTime: getTime(),
                CreateTime: getTime(),
                Tag: null
            },
            selects:{
                ActionType:['ActionType',true],
                Module:['Module',true]
            }
        };
    }

    CloseDiaLog(eve) {
        this.props.SonServer(0)
        if (eve === 'Finish') {
            //TODO   发送请求即可
            console.log(this.state.form)
            //callback()
            this.setState({//初始化
                form: Object.assign(this.state.form, this.state.formInit)
            })
        }else{
            this.setState({//初始化
                form: Object.assign(this.state.form, this.state.formInit)
            })
        }
        
    }
    FormValue(key, value) {
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        })
    }
    render() {
        const formData = this.props.formData
        // console.log(JSON.stringify(formData))
        const Data = formData.data
        if (formData.id === 0) {
            const form = this.state.form
            return (
                <div>
                    <Dialog
                        title="收货地址"
                        visible={formData.dialogVisible3}
                        onCancel={this.CloseDiaLog.bind(this)}
                        closeOnClickModal={false}
                        size='full'
                    >
                        <Dialog.Body>
                            <Layout.Row gutter={10}>
                                <Layout.Col xs='12' md='12' lg='12' sm='12'>
                                    <Form>
                                        <Form.Item label='显示名称' labelWidth='120'>
                                            <Input value={form.Text} onChange={this.FormValue.bind(this, 'Text')}></Input>
                                        </Form.Item>
                                        <Form.Item label='作者' labelWidth='120'>
                                            <Input value={form.Author} onChange={this.FormValue.bind(this, 'Author')}></Input>
                                        </Form.Item>
                                        <Form.Item label='行为类型' labelWidth='120'>
                                            <Selects value={form.ActionType} flag={'ActionType'}></Selects>
                                        </Form.Item>
                                        <Form.Item label='程序集' labelWidth='120'>
                                            <Input value={form.InitialAssemblyRef} onChange={this.FormValue.bind(this, 'InitialAssemblyRef')}></Input>
                                        </Form.Item>
                                        <Form.Item label='命名空间' labelWidth='120'>
                                            <Input value={form.Initial} onChange={this.FormValue.bind(this, 'Initial')}></Input>
                                        </Form.Item>
                                        <Form.Item label='参数' labelWidth='120'>
                                            <Input value={form.ParamString} onChange={this.FormValue.bind(this, 'ParamString')}></Input>
                                        </Form.Item>
                                    </Form>
                                </Layout.Col>
                                <Layout.Col xs='12' md='12' lg='12' sm='12'>
                                    <Form>
                                        <Form.Item label='Action名称' labelWidth='120'>
                                            <Input value={form.Action} onChange={this.FormValue.bind(this, 'Action')}></Input>
                                        </Form.Item>
                                        <Form.Item label='修改日期' labelWidth='120'>
                                            <Input value={form.LastModifyTime}></Input>
                                        </Form.Item>
                                        <Form.Item label='所属模块' labelWidth='120'>
                                            <Selects value={form.Module} flag={'Module'}></Selects>
                                        </Form.Item>
                                        <Form.Item label='窗体是否唯一' labelWidth='120'>
                                            <Switchs IsSingle={form.IsSingle} FormValue={this.FormValue.bind(this, 'IsSingle')}></Switchs>
                                        </Form.Item>
                                        <Form.Item label='备注' labelWidth='120'>
                                            <Input value={form.Notes} onChange={this.FormValue.bind(this, 'Notes')}></Input>
                                        </Form.Item>
                                    </Form>
                                </Layout.Col>
                            </Layout.Row>
                        </Dialog.Body>

                        <Dialog.Footer className="dialog-footer">
                            <Button onClick={this.CloseDiaLog.bind(this)}>取 消</Button>
                            <Button type="primary" onClick={this.CloseDiaLog.bind(this,'Finish')}>完 成</Button>
                        </Dialog.Footer>
                    </Dialog>
                </div>
            )
        } else {
            return (
                <div>
                    <Dialog
                        title="收货地址"
                        visible={formData.dialogVisible3}
                        onCancel={this.CloseDiaLog.bind(this)}
                        closeOnClickModal={false}
                        size='full'
                    >
                        <Dialog.Body>
                            <Layout.Row gutter={10}>
                                <Layout.Col xs='12' md='12' lg='12' sm='12'>
                                    <Form>
                                        <Form.Item label='显示名称' labelWidth='120'>
                                            <Input value={Data.Text} onChange={this.FormValue.bind(this, 'Text')} disabled></Input>
                                        </Form.Item>
                                        <Form.Item label='作者' labelWidth='120'>
                                            <Input value={Data.Author} onChange={this.FormValue.bind(this, 'Author')} disabled></Input>
                                        </Form.Item>
                                        <Form.Item label='行为类型' labelWidth='120'>
                                            <Selects value={Data.ActionType} flag={this.state.selects.ActionType} FormValue={this.FormValue.bind(this,'ActionType')}></Selects>
                                        </Form.Item>
                                        <Form.Item label='程序集' labelWidth='120'>
                                            <Input value={Data.InitialAssemblyRef} onChange={this.FormValue.bind(this, 'InitialAssemblyRef')} disabled></Input>
                                        </Form.Item>
                                        <Form.Item label='命名空间' labelWidth='120'>
                                            <Input value={Data.Initial} onChange={this.FormValue.bind(this, 'Initial')} disabled></Input>
                                        </Form.Item>
                                        <Form.Item label='参数' labelWidth='120'>
                                            <Input value={Data.ParamString} onChange={this.FormValue.bind(this, 'ParamString')} disabled></Input>
                                        </Form.Item>
                                    </Form>
                                </Layout.Col>
                                <Layout.Col xs='12' md='12' lg='12' sm='12'>
                                    <Form>
                                        <Form.Item label='Action名称' labelWidth='120'>
                                            <Input value={Data.Action} onChange={this.FormValue.bind(this, 'Action')} disabled></Input>
                                        </Form.Item>
                                        <Form.Item label='修改日期' labelWidth='120'>
                                            <Input value={Data.LastModifyTime} disabled></Input>
                                        </Form.Item>
                                        <Form.Item label='所属模块' labelWidth='120'>
                                            <Selects value={Data.Module} flag={this.state.selects.Module} FormValue={this.FormValue.bind(this, 'Module')}></Selects>
                                        </Form.Item>
                                        <Form.Item label='窗体是否唯一' labelWidth='120'>
                                            <Switchs IsSingle={Data.IsSingle} FormValue={this.FormValue.bind(this, 'IsSingle')}></Switchs>
                                        </Form.Item>
                                        <Form.Item label='备注' labelWidth='120'>
                                            <Input value={Data.Notes} onChange={this.FormValue.bind(this, 'Notes')} disabled></Input>
                                        </Form.Item>
                                    </Form>
                                </Layout.Col>
                            </Layout.Row>
                        </Dialog.Body>

                        <Dialog.Footer className="dialog-footer">
                            <Button onClick={this.CloseDiaLog.bind(this)}>取 消</Button>
                            <Button type="primary" onClick={this.CloseDiaLog.bind(this,'Finish')}>完 成</Button>
                        </Dialog.Footer>
                    </Dialog>
                </div>
            )
        }
    }

}