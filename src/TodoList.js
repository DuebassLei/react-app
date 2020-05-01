import React,{Component,Fragment} from 'react'
import './style.css'
import TodoItem from './TodoItem'
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
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange.bind(this)}
                        />
                    <button onClick={this.handleBtnClick.bind(this)} >提交</button>
                </div>
                <ul >
                    {
                        this.state.list.map((item, index)=>{
                            return(
                                <div>
                                    <TodoItem 
                                        content={item} 
                                        index={index}
                                        deleteItem={this.handleItemDelete.bind(this)}
                                        /> 
                                    {/*<li key={index} 
                                    onClick={this.handleItemDelete.bind(this,index)}
                                    >
                                        {item}
                                    </li>
                                */}
                                </div> 
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
        console.log(`${index}`)
        const list = [...this.state.list]
        //array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
        list.splice(index, 1)
        this.setState({
            list:list
        })
    }
}
// 导出组件
export default TodoList;