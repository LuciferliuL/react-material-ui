import React from 'react';
import { Table} from 'element-react';
/**
 * 1.传入表头属性columns
 * 2.传入处理的数据TableData
 * 3.接受父节点传入的方法 点击条目传送条目内容 用来表单渲染TableValue
 */
export default class Tables extends React.Component {
  constructor(props){
    super(props)
    this.TableValue = this.TableValue.bind(this)
  }
  TableValue(item){
    // console.log(item)
    this.props.SonTable(item)
  }
  render() {
    const TableData = this.props.TableData
    const Columns = this.props.Columns
    // console.log(TableData)
    return (
      <Table
        style={{ width: '100%' }}
        columns={Columns}//表头的内容
        data={TableData}//表格的内容
        border={true}
        emptyText={'没有内容显示'}//默认的内容
        maxHeight={680}//最大高度，height是高度，不写就是默认自动
        highlightCurrentRow={true}//选中高亮
        onCurrentChange={this.TableValue}//选中行的数据
      />
    )
  }
}