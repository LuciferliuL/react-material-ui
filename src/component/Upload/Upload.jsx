import React from 'react';
import { Card } from 'element-react';

import { IPserver } from '../BaseFun/BaseFun'

export default class Uploads extends React.Component {
  render() {
    const FilePath = this.props.FilePath
    // console.log(FilePath)
    var filename = null
    if (FilePath === undefined || FilePath == null) {
      filename = []
    } else {
      filename = FilePath.split('/')
      filename = filename[filename.length - 1]
    }

    return (
      <Card
        className="box-card"
        header={
          <div className="clearfix">        
            <span style={{ "float": "left" }}>
              <a href={FilePath} download>{filename}</a>
            </span>
          </div>
        }
      >
      </Card>
    )
  }
}