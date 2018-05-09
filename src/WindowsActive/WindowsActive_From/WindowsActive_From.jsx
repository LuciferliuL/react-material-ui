import React from 'react';
import { Dialog, Form, Input, Select, Button, Layout } from 'element-react';

/**
 * 1.接受id为显示增删改查  0123
 * 2.接受dialogVisible 是否显示
 * 3.formData 显示数据
 */
export default class WindowsActiveFrom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                region: ''
            }
        };
    }

    CloseDiaLog() {
        this.props.SonServer()
    }
    render() {
        const formData = this.props.formData
        console.log(formData)
        const Data = formData.data
        if (formData.id === 0) {
            return (
                <div>
                    <Dialog
                        title="收货地址"
                        visible={formData.dialogVisible3}
                        onCancel={this.CloseDiaLog.bind(this)}
                        closeOnClickModal={false}
                    >
                        <Dialog.Body>
                                <Form model={this.state.form}>
    
                                        <Form.Item label="显示名称" labelWidth="120">
                                            <Input value={this.state.form.name}></Input>
                                        </Form.Item>
  
                                        <Form.Item label="ACTION名称" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>
      
                                        <Form.Item label="作者" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>

                                        <Form.Item label="行为类型" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>
        
                                        <Form.Item label="程序集" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>

                                        <Form.Item label="修改日期" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>
 
                                    <Form.Item label="所属模块" labelWidth="120">
                                        <Select value={this.state.form.region}>
                                            <Select.Option label="区域一" value="shanghai"></Select.Option>
                                            <Select.Option label="区域二" value="beijing"></Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="命名空间" labelWidth="120">
                                        <Input value={Data.PK}></Input>
                                    </Form.Item>
                                    <Form.Item label="参数" labelWidth="120">
                                        <Input value={Data.PK}></Input>
                                    </Form.Item>
                                    <Form.Item label="窗体是否唯一" labelWidth="120">
                                        <Input value={Data.PK}></Input>
                                    </Form.Item>
                                    <Form.Item label="备注" labelWidth="120">
                                        <Input value={Data.PK}></Input>
                                    </Form.Item>
                                </Form>
                        </Dialog.Body>

                        <Dialog.Footer className="dialog-footer">
                            <Button onClick={this.CloseDiaLog.bind(this)}>取 消</Button>
                            <Button type="primary" onClick={this.CloseDiaLog.bind(this)}>编 辑</Button>
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
                    >
                        <Dialog.Body>
                            <Layout.Row gutter='10'>
                                <Form model={this.state.form}>
                                    <Layout.Col xs="12" sm="12" md="12" lg="12">
                                        <Form.Item label="显示名称" labelWidth="120">
                                            <Input value={this.state.form.name}></Input>
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col xs="12" sm="12" md="12" lg="12">
                                        <Form.Item label="ACTION名称" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col xs="12" sm="12" md="12" lg="12">
                                        <Form.Item label="作者" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col xs="12" sm="12" md="12" lg="12">
                                        <Form.Item label="行为类型" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col xs="12" sm="12" md="12" lg="12">
                                        <Form.Item label="程序集" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>
                                    </Layout.Col>
                                    <Layout.Col xs="12" sm="12" md="12" lg="12">
                                        <Form.Item label="修改日期" labelWidth="120">
                                            <Input value={Data.PK}></Input>
                                        </Form.Item>
                                    </Layout.Col>
                                    <Form.Item label="所属模块" labelWidth="120">
                                        <Select value={this.state.form.region}>
                                            <Select.Option label="区域一" value="shanghai"></Select.Option>
                                            <Select.Option label="区域二" value="beijing"></Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="命名空间" labelWidth="120">
                                        <Input value={Data.PK}></Input>
                                    </Form.Item>
                                    <Form.Item label="参数" labelWidth="120">
                                        <Input value={Data.PK}></Input>
                                    </Form.Item>
                                    <Form.Item label="窗体是否唯一" labelWidth="120">
                                        <Input value={Data.PK}></Input>
                                    </Form.Item>
                                    <Form.Item label="备注" labelWidth="120">
                                        <Input value={Data.PK}></Input>
                                    </Form.Item>
                                </Form>
                            </Layout.Row>
                        </Dialog.Body>

                        <Dialog.Footer className="dialog-footer">
                            <Button onClick={this.CloseDiaLog.bind(this)}>取 消</Button>
                            <Button type="primary" onClick={this.CloseDiaLog.bind(this)}>编 辑</Button>
                        </Dialog.Footer>
                    </Dialog>
                </div>
            )
        }
    }

}