import React from 'react';
import {Radio, Form, Input, Button} from 'element-react'

export default class RootTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labelPosition: 'right',
      form: {
        name: '',
        region: '',
        type: ''
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state.form)
    setTimeout(() => {
      this.setState({
        form: Object.assign(this.state.form,{
          name: '',
          region: '',
          type: ''
        })
      })
    }, 10000);
    
  }

  onChange(key, value) {
    this.setState({
      //assign 分派指派  Object.assign(A,B) 意思是把A和B融合,如果有重复 则B覆盖A.
      //[key] 是ES6的属性名的表达式, 直接key变量可以传任何属性进去,配合传入的value就可以实现动态改变
      form: Object.assign(this.state.form, {[key]: value})
    });
  }

  canccel(){

  }
  render() {
    return (
      <div>
        <Form
          labelPosition={this.state.labelPosition}
          labelWidth="100"
          model={this.state.form}
          className="demo-form-stacked">
          <Form.Item label="名称">
            <Input
              value={this.state.form.name}
              onChange={this
              .onChange
              .bind(this, 'name')}></Input>
          </Form.Item>
          <Form.Item label="活动区域">
            <Input
              value={this.state.form.region}
              onChange={this
              .onChange
              .bind(this, 'region')}></Input>
          </Form.Item>
          <Form.Item label="活动展开形式">
            <Input
              value={this.state.form.type}
              onChange={this
              .onChange
              .bind(this, 'type')}></Input>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={this
              .handleSubmit
              .bind(this)}>提交</Button>
              <Button
            type="primary"
            onClick={this
            .canccel
            .bind(this)}>取消</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}