import React from 'react';
import { Form, Input } from 'element-react';

import Uploads from '../Upload/Upload'
const valueName = [
  { label: '作者', value: 'Author' },
  { label: 'Action', value: 'Action' },
  { label: '中文标题', value: 'Caption' },
  { label: '图片键', value: 'ImgeCode' },
  { label: '参数1', value: 'Param1' },
  { label: '参数2', value: 'Param2' },
  { label: '备注', value: 'Note' }
]
export default class RootTable extends React.Component {
  handleChange(key, value) {
    this.props.handleChange(key,value)
  }
  render() {
    const Forms = this.props.Forms
    const data = this.props.data
    let items = []
    if(Forms.PK === 0 || Forms.PK === 1){//新增
      valueName.map((v,index) => {
        items.push(
          <Form.Item label={v.label} key={index}>
            <Input
              value={data[v.value]}
            //bind里面可以绑定的东西  this的指向 查阅
            onChange={this.handleChange.bind(this, v.value)}
            ></Input>
          </Form.Item>
        )
        return true
      })
    }else if(Forms.PK === 2){//编辑
      valueName.map((v,index) => {
        items.push(
          <Form.Item label={v.label} key={index}>
            <Input
              value={data.form[v.value]}
              onChange={this.handleChange.bind(this, v.value)}
            //bind里面可以绑定的东西  this的指向 查阅
            ></Input>
          </Form.Item>
        )
        return true
      })
    }else{//默认
      valueName.map((v,index) => {
        items.push(
          <Form.Item label={v.label} key={index}>
            <Input
              value={Forms[v.value]}
            //bind里面可以绑定的东西  this的指向 查阅
            ></Input>
          </Form.Item>
        )
        return true
      })
    }
    return (
      <div>
        <Form
          labelPosition='right'
          labelWidth="100"
          model={Forms}
          className="demo-form-stacked">
          {items}
          <Form.Item label='详细设计'>
            <Uploads FilePath={Forms.FilePath}></Uploads>
          </Form.Item>
        </Form>
      </div>
    )
  }
}



