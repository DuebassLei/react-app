import React, {Component} from 'react'
class LifeCycle extends Component {
  //es6函数，非React生命周期函数，但是会被自动执行
  constructor(props) {
    console.log('0.构造函数被执行')
    super(props)
    //定义state
    this.state = {
      notify: '我是一个通知消息'
    }
  }
  	//组件将要挂载时候触发的生命周期函数
	componentWillMount(){
		console.log('1.组件将要挂载')
	}
	render(){
		console.log('2.数据渲染render')
		return(
			<div>
				生命周期函数演示
			</div>
        )}
        
    //组件挂载完成时候触发的生命周期函数
	componentDidMount(){
		console.log('3.组件挂载完成')
    }

    //一个组件要从父组件接受参数
    //只要父组件的render函数被重新执行，子组件的这个生命周期就会被执行
    componentWillReceiveProps(){
        console.log('child componentWillReceiveProps')
    }

}
export default LifeCycle