import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    // 在复杂组件中这种this写法可以节约一定的性能
    this.handleClick = this
      .handleClick
      .bind(this)
  }
  render() {
    // es6语法优化
    const {content, test} = this.props
    return (
      <div onClick={this.handleClick}>
        {test}- {content}
      </div>
    )
  }
  handleClick() {
    const {deleteItem, index} = this.props
    deleteItem(index)
  }
}

//指定传递参数的数据类型,类型校验
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
//参数默认值
TodoItem.defaultProps = {
  test: 'hello world'
}
export default TodoItem