import React from 'react';
import { Select } from 'element-react';


/**
 * 1.value:值 string  
 * 2.flag:标记是module还是ActionType 0为名字 1为状态true  false
 */
const widthStyle = {
    width: 100 + '%'
}
export default class Selects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [{
                value: '财务模块',
                label: '财务模块'
                }, {
                value: '采购模块',
                label: '采购模块'
                }, {
                value: '价格模块',
                label: '价格模块'
                }, {
                value: '结算模块',
                label: '结算模块'
                }, {
                value: '库存模块',
                label: '库存模块'
                }, {
                value: '其他模块',
                label: '其他模块'
                }, {
                value: '系统设置模块',
                label: '系统设置模块'
                }, {
                value: '销售模块',
                label: '销售模块'
                }, {
                value: '资金模块',
                label: '资金模块'
            }],
            options2: [{
                value: '自定义的InitialAction',
                label: '自定义的InitialAction'
                }, {
                value: '编辑单据EditBill',
                label: '编辑单据EditBill'
                }, {
                value: '简单通用查询',
                label: '简单通用查询'
            }],
            value: '',
            Module: ''
        };
        this.Change = this.Change.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
            Module: nextProps.flag
        })
    }
    Change(e){
        this.props.FormValue(e)
    }
    render() {
        if (this.state.Module === 'Module') {
            return (
                <Select value={this.state.value} style={widthStyle} onChange={this.Change}>
                    {
                        this.state.options.map(el => {
                            return <Select.Option key={el.value} label={el.label} value={el.value} />
                        })
                    }
                </Select>
            )
        } else {
            return (
                <Select value={this.state.value} style={widthStyle} onChange={this.Change}>
                    {
                        this.state.options2.map(el => {
                            return <Select.Option key={el.value} label={el.label} value={el.value} />
                        })
                    }
                </Select>
            )
        }
    }
}