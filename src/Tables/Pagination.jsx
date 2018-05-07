import React from 'react';
import {Pagination} from 'element-react';
/**
 * 1.PageNum总条目数量 
 * 2.Pages传给父组件选中的页码
 */
export default class Paginations extends React.Component {
    constructor(props) {
        super(props)
        this.CurrentChange = this.CurrentChange.bind(this)
    }
    CurrentChange(v){
        this.props.pageChange(v)
    }
    render() {
        const total = this.props.PageNum
        return (
            <div className="block">
                <Pagination 
                layout="total, prev, pager, next" 
                total={total} 
                pageSize={50}
                onCurrentChange={this.CurrentChange}/>
            </div>
        )
    }
}