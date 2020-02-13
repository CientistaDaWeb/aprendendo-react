import React, {Component} from "react"

export default class Panel extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const {headerColor, headerText, data} = this.props
    return (
      <div className="panel" style={{width: '500px', height: '100px', position: 'relative', border: '1px solid '+headerColor, marginBottom: '10px' }}>
        <div className="panel-head" style={{width: '100%', height: '50px', background: headerColor}}>
          {headerText}
        </div>
        <div className="panel-body">
          { data }
        </div>
      </div>
    )
  }
}
