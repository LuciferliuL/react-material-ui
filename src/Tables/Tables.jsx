import React from 'react';
import { Table, Icon, Button, Tag, } from 'element-react';
/**
 * 1.传入表头属性columns
 * 2.传入处理的数据TableData
 */
export default class Tables extends React.Component {
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
        onCurrentChange={item => { console.log(item) }}//选中行的数据
      />
    )
  }
}