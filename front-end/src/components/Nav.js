import React, { useEffect  } from 'react'
import {Link ,useNavigate } from 'react-router-dom'

function Nav() {

  const auth=localStorage.getItem('user');
  const navigate=useNavigate()

  const logout=()=>{
  localStorage.clear();
  navigate('/signup')
  }
  return (
   
      <div>
        <img className='logo' src="https://www.logodesignteam.com/images/portfolio-images/ecommerce-websites-logo-design/ecommerce-websites-logo-design20.jpg" alt="logo" />
        {  auth ?
        <ul className='nav-ul'>
          <li><Link to="/">Product</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/update">Update Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link onClick={logout} to="/signup">logout ({JSON.parse(auth).name})</Link></li>
    
        
         
        </ul> :

        <ul className='nav-ul nav-right'>

        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
</ul>

        

          }
      </div>
    );
    
  

  // return (
    
  //   <div>
        
  //       <ul className='nav-ul'>
  //       <li><Link to="/"> Product</Link></li> 
  //       <li><Link to="/add">Add Product</Link></li> 
  //       <li><Link to="/update">Update Product</Link></li> 
  //       <li><Link to="/profile">Profile</Link></li> 
       
        
          
  //         {/* // auth ? <li><Link onClick={logout} to="/signup">Logout</Link> <li/> 
  //         // :<> 
  //         // <li><Link to="/signup">sign Up</Link></li>
  //         // <li><Link to="/login">Login</Link></li> 
  //         // </> */}
  //      {
  //       auth 
  //       <li><Link onClick={logout} to="/signup">Logout</Link></li> :
  //         <>
  //         <li> <Link to="/signup">sign Up</Link></li> 
  //         <li> <Link to="/login">Login</Link></li>
  //         </>
       
          

        
  //         }
        
         
  //     </ul>
      
        
      
  //   </div>
  // )
}

export default Nav