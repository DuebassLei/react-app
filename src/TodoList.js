import React,{Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'
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
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}
                        />
                    <button onClick={this.handleBtnClick} >提交</button>
                </div>
                <ul >
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map((item, index)=>{
            return(
                    <TodoItem
                        key={index} 
                        content={item} 
                        index={index}
                        deleteItem={this.handleItemDelete}
                        /> 
            )
        })
    }
    handleInputChange(e){
        //console.log(e.target.value);
        //this is undefined，通过es6的bind更改this指向
        //错误，通过setState更改数据状态
        //this.setstState.inputValue = e.target.value

        //setState更改数据

        //改用下方es6写法，返回一个函数
        // this.setState({
        //     inputValue: e.target.value
        // })
        
        const value =  e.target.value
        this.setState(() => ({
            inputValue: value
        }))

    }

    handleBtnClick(){
        // this.setState({
        //     //添加数据
        //     list:[...this.state.list,this.state.inputValue],
        //     //清空数据
        //     inputValue:''
        // })
        
        // this.setState可以接收一个参数，修改之前的参数
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelete(index){
        // immutable
        // state 不允许我们直接修改数据
        // 错误写法：this.state.list.splice(index,1)
    
        // const list = [...this.state.list]
        // list.splice(index, 1)
        // this.setState({
        //     list:list
        // })

        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index,1)
            return {list}
        })
    }
}
// 导出组件
export default TodoList;