import React,{ Component } from 'react'
class TodoItem extends Component{
    constructor(props){
        super(props)
        // 在复杂组件中这种this写法可以节约一定的性能
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
      // es6语法优化
      const {content} = this.props
        return (
            <div onClick={this.handleClick }>
                 {content}
            </div>
            )
    }
    handleClick(){
      const { deleteItem, index } = this.props
      deleteItem(index)
    }
}
export default TodoItem