import React from 'react';
import {Tree, Input} from 'element-react'
import  'isomorphic-fetch'

import {IPserver, TreeMathFloat} from '../BaseFun/BaseFun'

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
      fetch('http://'+IPserver(true)+'/api/Menu/GetMenuByCatalog?catalog=GOS',{method:"GET"})
      .then(res=>{
        return res.json()
      })
      .then(res=>{
        this.setState({
          data : TreeMathFloat(res,4),
          fullscreen: false
        })       
      })
      .catch((resolve)=>{
        console.log(resolve)
      })
    }  

    onNodeClicked(nodeModel, node){
      // console.log(nodeModel.PK)
      fetch('http://' + IPserver(true) + '/api/Menu/GetMenuInfoForPK?pk=' + nodeModel.PK,{method:"GET"})
      .then(res=>{
        return res.json()
      })
      .then(res=>{
        // console.log(res)
        this.props.FormsChange(res)
      })
      .catch((resolve)=>{
        console.log(resolve)
      })
    }
    
    shouldComponentUpdate(event){
      // console.log(Counts)
      if(event.Counts === 1){
        return false
      }
     return true
    }
      render() {
        // const Counts= this.props.Counts
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
              highlightCurrent={true}
              accordion={false}
              defaultExpandAll={false}
              onNodeClicked={this.onNodeClicked.bind(this)}
              filterNodeMethod={(value, data)=>{
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
              }}
            />
          </div>
      
        )
      }
}

