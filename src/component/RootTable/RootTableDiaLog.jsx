import React from 'react';
import {Dialog, Form, Button, Input, Select} from 'element-react'

import RootTable from './RootTable'
export default class RootTableDiaLog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dialogVisible3: false,
            form: {
                PK:-999
              }
        }
    }
  
    render(){
        const RootData = this.props.RootData
        const Forms = this.state.form
        return(
            <Dialog
            title="添加根"
            visible={ RootData.dialogVisible }
            onCancel={ () => this.props.ChooseVisible() }
          >
            <Dialog.Body>
              <RootTable Forms={Forms}></RootTable>
            </Dialog.Body>
            <Dialog.Footer className="dialog-footer">
              <Button onClick={ () => this.props.ChooseVisible() }>取 消</Button>
              <Button type="primary" onClick={ this.Submits.bind(this) } nativeType='submit'>确 定</Button>
            </Dialog.Footer>
          </Dialog>
        )
    }
    Submits(e){
        console.log(e)
        // this.props.ChooseVisible()
    }
}