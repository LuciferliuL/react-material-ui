import React from 'react';
import { Switch } from 'element-react';

/**
 * 1.接受初始化的值IsSingle   true OR false
 * 2.接受FormValue  来监听修改父元素
 */
export default class Switchs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: true,
        },
        this.SwitchChange = this.SwitchChange.bind(this)
    }
    // componentWillReceiveProps(nextProps) {
    //     nextProps.IsSingle === '' || nextProps.IsSingle
    //         ? this.setState({
    //             value: true
    //         })
    //         : this.setState({
    //             value: nextProps.IsSingle
    //         })
    //     console.log(this.state.value)
    // }
    SwitchChange(value) {
        console.log(value)
        this.setState({
            value:value
        })
        this.props.FormValue(value)
    }
    render() {
        return (
            <Switch
                value={this.state.value}
                onColor="#13ce66"
                offColor="#ff4949"
                onValue={true}
                offValue={false}
                onChange={this.SwitchChange}
            >
            </Switch>
        )
    }

}