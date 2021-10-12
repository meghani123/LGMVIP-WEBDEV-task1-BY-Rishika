import React,{ useState } from "react";
import './rishika.css';

function App(){
    const [users,setUsers] = useState();
    const getUsers= async () => {
        const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
    };
    
    
    return (
        
        <>
           
           <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
  
    <form className="d-flex">
    
    <div className="btn btn-outline-success" onClick={getUsers}>Getusers</div>
    </form>
  </div>
</nav>
      <div className="container">
        {users?.map((a,i) => {
          return(
            <div className=" row" key={i}>
              <img src={a.avatar} className="photos" alt="not updated"/>
              <div className="content">
                <h2 className="name">
                {a.first_name}{a.last_name}
                </h2>
                <h5 className="email">{a.email}</h5>
              </div>

            </div>
                              );
                    })}   </div>
                    </>
    );}                 




export default App;              
