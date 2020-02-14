import React, {Component} from "react"
import Panel from './Panel'

export default class Props extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const {identificador, classe} = this.props
    return (
      <div>
        <h1>{classe === 'destaque' ? 'destaque' : 'normal'} {identificador}</h1>
        <Panel headerColor="green" headerText="School of Net" data="Curso React"/>
        <Panel headerColor="red" headerText="School of Net2" data="Curso React2"/>
      </div>
    )
  }
}
