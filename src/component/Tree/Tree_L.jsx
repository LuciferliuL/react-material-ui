import React from 'react';
import {Tree, Input} from 'element-react'
import  'isomorphic-fetch'

import {TreeMath, IPserver, TreeMathFloat} from '../BaseFun/BaseFun'

export default class TreeL extends React.Component{
    constructor(props) {
        super(props);
      
        this.state = {
          data: [],
          options: {
            children: 'children',
            label: 'label'
          }
        }
      }
    
    componentDidMount(){
      fetch('http://'+IPserver(false)+'/api/Menu/GetMenuByCatalog?catalog=GOS',{method:"GET"})
      .then(res=>{
        return res.json()
      })
      .then(res=>{
        
        this.setState({
          data : TreeMathFloat(res,4)
        })       
      })
      .catch((resolve)=>{
        console.log(resolve)
      })
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
              accordion={true}
              defaultExpandAll={false}
              filterNodeMethod={(value, data)=>{
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
              }}
            />
          </div>
      
        )
      }
}

