import {useContext} from 'react'
import jwt_decode from "jwt-decode"
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
// import Logo from './views/L.png'

function Navbar() {

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")
  // const token = localStorage.getItem("authTokens")

  // if (token){
  //   const decode = jwtDecode(token)
  //   var user_id = decode.user_id
  //   var username = decode.username
  //   var full_name = decode.full_name
  //   var image = decode.image

  // }

  if (token){
    const decoded = jwt_decode(token) 
    var user_id = decoded.user_id
    var username = decoded.username
  }

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top " style={{backgroundColor:"#000000"}}>
        <div class="container-fluid">
          
            <img  src="" alt="" />

          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#"> <i className='fas fa-home'></i> Home</a> */}
                <Link class="nav-link" to="/">HOME</Link>
              </li>
              {token === null && 
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
                </li>
              </>
              }

            {token !== null && 
              <>
                
                <li class="nav-item">
                  <Link class="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Chat</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={logoutUser} style={{cursor:"pointer"}}> <i className='fas fa-sign-out-alt'></i>Logout From {username}</a>
                  
                </li>
              </>
              }   
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar