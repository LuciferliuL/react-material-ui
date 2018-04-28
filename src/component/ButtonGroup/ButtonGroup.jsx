import React from 'react';
import { Button, Message, MessageBox } from 'element-react';
import 'isomorphic-fetch'
import RootTableDiaLog from '../RootTable/RootTableDiaLog'
import { IPserver } from '../BaseFun/BaseFun'
export default class ButtonGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      RootData: {
        PK: '',
        dialogVisible: false
      }
    }
  }

  //添加根和下级唯一区别就是要不要带PK 所以可以合在一起一个fun即可
  handleAddRoot(Form, target, e) {
    if (target === 'Root') {
      this.setState({
        RootData: {
          PK: 0,
          dialogVisible: true,
          form: Form
        }
      })
    } else if (target === 'Level') {
      // console.log(Form.PK)
      if (Form.PK === 10086) {
        Message({
          showClose: true,
          message: '请选择一个节点',
          type: 'warning'
        });
      } else {
        this.setState({
          RootData: {
            PK: 1,
            dialogVisible: true,
            form: Form
          }
        })
      }
    } else if (target === 'Edit') {
      if (Form.PK === 10086) {
        Message({
          showClose: true,
          message: '请选择一个节点',
          type: 'warning'
        });
      } else {
        this.setState({
          RootData: {
            PK: 2,
            dialogVisible: true,
            form: Form
          }
        })
      }
    } else if (target === 'Cancel') {
      if (Form.PK === 10086) {
        Message({
          showClose: true,
          message: '请选择一个节点',
          type: 'warning'
        });
      } else {
        MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
          fetch('http://' + IPserver(true) + '/api/Menu/DeleteMenu?PK='+Form.PK,{method:"GET"})
          .then((res)=>res.json())
          .then(res=>{
            if(res === 'True'){
              Message({
                type: 'success',
                message: '删除成功!'
              });
            }else{
              Message({
                type: 'error',
                message: '删除失败!'
              });
            }
          })
          // console.log(Form)
          this.props.Refresh()
        }).catch(() => {
          Message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
  ChooseVisible() {
    this.setState({
      RootData: {
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
          <Button type="primary" onClick={this.handleAddRoot.bind(this, Form, 'Edit')}>编辑</Button>
          <Button type="primary" onClick={this.handleAddRoot.bind(this, Form, 'Cancel')}>删除</Button>
        </Button.Group>
        <RootTableDiaLog RootData={this.state.RootData} ChooseVisible={this.ChooseVisible.bind(this)}></RootTableDiaLog>
      </div>
    )
  }
}