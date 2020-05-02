import React, {Component} from "react";

class Test extends Component {
    //当父组件的render函数被执行时，子组件的render函数都将被重新运行一次
  render()
  {
    return <div>{this.props.content}</div>
  }
}
export default Test