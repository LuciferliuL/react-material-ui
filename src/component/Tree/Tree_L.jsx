import React from 'react';
import {Tree, Input} from 'element-react'

export default class Tree_L extends React.Component{
    constructor(props) {
        super(props);
      
        this.state = {
          data: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }],
          options: {
            children: 'children',
            label: 'label'
          }
        }
      }
      
      render() {
        const { data, options } = this.state
      
        return (
          <div>
            <Input placeholder="输入关键字进行过滤" onChange={text=> this.tree.filter(text)} />
            <Tree
              ref={e=> this.tree = e}
              className="filter-tree"
              data={data}
              options={options}
              nodeKey="id"
              defaultExpandAll={true}
              filterNodeMethod={(value, data)=>{
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
              }}
            />
          </div>
      
        )
      }
}