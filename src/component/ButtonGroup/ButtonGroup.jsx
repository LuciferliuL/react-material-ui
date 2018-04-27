import React from 'react';
import { Button, Form, Dialog } from 'element-react';

import RootTableDiaLog from '../RootTable/RootTableDiaLog'

export default class ButtonGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      RootData : {
        PK : 0,
        dialogVisible : false
      }
    }
  }

  //添加根和下级唯一区别就是要不要带PK 所以可以合在一起一个fun即可
  handleAddRoot(Form, target, e){
    if(target === 'Root'){
      this.setState({
        RootData : {
          PK : Form.PK,
          dialogVisible : true
        }
      })
    }
  }
  ChooseVisible(){
    this.setState({
      RootData:{
        dialogVisible: false
      }
    })
  }
  render() {
    const Form = this.props.Datas
    return (
      <div>
        <Button.Group>
          <Button type="primary" onClick={this.handleAddRoot.bind(this, Form, 'Root')}>添加根</Button>
          <Button type="primary" onClick={this.handleAddRoot.bind(this, Form, 'Level')}>添加下级</Button>
          <Button type="primary">刷新</Button>
          <Button type="primary">编辑</Button>
          <Button type="primary">删除</Button>
        </Button.Group>
        <RootTableDiaLog RootData={this.state.RootData} ChooseVisible={this.ChooseVisible.bind(this)}></RootTableDiaLog>
      </div>
    )
  }
}