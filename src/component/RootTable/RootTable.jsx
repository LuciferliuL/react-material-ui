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
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Author: '',
        Action: '',
        Caption: '',
        ImgeCode: '',
        Param1: '',
        Param2: '',
        Note: ''
      }
    }
  }
  handleChange(key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
  }
  render() {
    const Forms = this.props.Forms
    let items = []
    if(Forms.PK != -999){
      valueName.map((v,index) => {
        items.push(
          <Form.Item label={v.label} key={index}>
            <Input
              value={Forms[v.value]}
            //bind里面可以绑定的东西  this的指向 查阅
            ></Input>
          </Form.Item>
        )
      })
    }else{
      valueName.map((v,index) => {
        items.push(
          <Form.Item label={v.label} key={index}>
            <Input
              value={this.state.form[v.value]}
              onChange={this.handleChange.bind(this, v.value)}
            //bind里面可以绑定的东西  this的指向 查阅
            ></Input>
          </Form.Item>
        )
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



