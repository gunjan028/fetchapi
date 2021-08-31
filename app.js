import React,{ Component, isValidElement } from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      users:{data:[]},
      page:1
    }
  }
     
  componentDidMount() {
    var _this=this; 
   fetch("https://reqres.in/api/users?page=")
   .then(response => response.json())
    .then((data) =>{ 
    _this.setState({ users:data})
      
    }) 
  }
  componentDidUpdate(prevProps,prevState) {
  if (prevState.page!==this.state.page)
    {
    var _this=this; 
   fetch("https://reqres.in/api/users?page="+this.state.page)
   .then(response => response.json())
    .then((data) =>{ 
      _this.setState({ users:data})
    }) 
    }
  }

 pageChange=(page)=>{
   console.log(page)
   this.setState({page:page})
  };
 
  render() {
    
    const columns= [{
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    }, 
    {
      title: 'first_name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'last_name',
      dataIndex: 'last_name',
      key: 'last_name'},
    ];
    return (<div>
     <Table  dataSource={this.state.users.data} columns={columns} 
      pagination={{onChange:this.pageChange ,
      total:this.state.users.total}}/>
    </div>)
        
  }
}
export default App