import React from 'react';
import { Button } from 'element-react';

export default class ButtonGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Button.Group>
          <Button type="primary">添加根</Button>
          <Button type="primary">添加下级</Button>
          <Button type="primary">刷新</Button>
          <Button type="primary">编辑</Button>
          <Button type="primary">删除</Button>
        </Button.Group>
      </div>
    )
  }
}