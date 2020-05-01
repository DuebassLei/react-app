# :tada: react-app 

>学习React笔记仓库
## 环境

1. nodejs

## 运行
1. 安装依赖 
    ```
    yarn
    ```

2. 启动
    ```
    yarn start
    ```

3. 测试 
    ```
    yarn test
    ```

4. 打包 
    ```
    yarn build
    ```


 
# Study React Notes

## JSX语法

> JSX语法中，如果我们要使用自己创建的组件，组件开头必须大写

 ```js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';

// JSX 语法 <App/> 如果我们要使用自己创建的组件，组件开头必须大写
ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

 ```


## Fragment占位符

> 使用</Fragment> 占位符解决最外层多一层div嵌套的问题

```js
import React,{Component,Fragment} from 'react'
class TodoList extends Component{
    render(){
        return(
            <Fragment>
                <div><input/><button>提交</button></div>
                <ul>
                    <li>学英语</li>
                    <li>Learning React</li>
                </ul>
            </Fragment>
        )
    }
}
// 导出组件
export default TodoList;
```

## 响应式设计和事件绑定

### 改变`this`指向

>通过`es6`的`bind`改变`this`指向



```js
onChange={this.handleInputChange.bind(this)}
```

### State状态管理

```js
import React,{Component,Fragment} from 'react'

//使用</Fragment> 占位符解决最外层多一层div嵌套的问题
class TodoList extends Component{
    //构造函数 
    constructor(props){
        super(props);
        //state中定义数据
        this.state ={
            inputValue:'',
            list:[]
        }
    }
    render(){
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputValue} 
                           onChange={this.handleInputChange.bind(this)}
                        />
                    <button onClick={this.handleBtnClick.bind(this)} >提交</button>
                </div>
                <ul >
                    {
                        this.state.list.map((item, index)=>{
                            return( 
                                <li key={index} 
                                    onClick={this.handleItemDelete.bind(this,index)}
                                    >
                                    {item}
                                    </li>
                            )
                    })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        //console.log(e.target.value);

        //this is undefined，通过es6的bind更改this指向
        //错误，通过setState更改数据状态
        //this.setstState.inputValue = e.target.value

        //setState更改数据
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick(){
        this.setState({
            //添加数据
            list:[...this.state.list,this.state.inputValue],
            //清空数据
            inputValue:''
        })
    }
    handleItemDelete(index){
        // immutable
        // state 不允许我们直接修改数据
        // 错误写法：this.state.list.splice(index,1)

        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list:list
        })
    }
}
// 导出组件
export default TodoList;
```

### 不转义标签内容
>使用`dangerouslySetInnerHTML`不转义`<h1>Test</h1>`

```js
    {
                        this.state.list.map((item, index)=>{
                            return( 
                                <li key={index} 
                                    onClick={this.handleItemDelete.bind(this,index)}
                                    dangerouslySetInnerHTML={{__html:item}}
                                    >
                                    </li>
                            )
                        })
                    }
```

默认写法转义标签

### `htmlFor` 鼠标聚焦输入框

```html
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange.bind(this)}
                        />
```

## 组件拆分及传值

### 组件传值通过属性

> 子组件通过`this.props.xxx`接收数据



```js
# 父组件传值
 <TodoItem content={item} /> 
# 子组件接受
import React,{ Component } from 'react'
class TodoItem extends Component{
    render(){
        return <div>{this.props.content}</div>
    }
}
export default TodoItem
```

> 子组件触发父组件`this.props.fn()` 方法

```js
# 父组件
     <TodoItem 
                                        content={item} 
                                        index={index}
                                        deleteItem={this.handleItemDelete.bind(this)}
                                        /> 


    handleItemDelete(index){
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list:list
        })
    }


# 子组件
class TodoItem extends Component{
    constructor(props){
        super(props)
        //在复杂组件中这种this写法可以节约一定的性能
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        return(
            <div onClick={this.handleClick }>
                 {this.props.content}
            </div>
            )
    }
    handleClick(){
      this.props.deleteItem(this.props.index)
    }
}
export default TodoItem

```

### 代码优化

- 优化前

```js
    render(){
        return (
            <div onClick={this.handleClick }>
                 {this.props.content}
            </div>
            )
    }
    
    handleClick(){
      this.props.deleteItem(this.props.index)
    }
```

- 优化后

```js
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
```










