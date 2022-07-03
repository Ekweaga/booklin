
import './App.css';


import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home';
import Menu from './Menu';
import {Link} from 'react-router-dom'
import Footer from './Footer';
import {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';
import Books from './Books';
import Cart from './Cart';
import {AiOutlineHome} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'
import {SiBloglovin} from 'react-icons/si'
import {MdOutlineLibraryBooks} from 'react-icons/md'
import Login from './Auth/Login';
import Auth from './Auth';
import {useSelector} from 'react-redux'

function App() {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  const totalquantity = useSelector((state)=>state.cart.totalQuantity)

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])


  return (
    <div className="App">
    
      <BrowserRouter>
      <div className='sticky'>
     {isLoggedIn?<Menu/>:''} 
     </div>
      {isLoggedIn ? <div className='top'>
    <ul>
        <li>
        <Link to='' style={{color:'white',textDecoration:'none'}}>Home</Link>
        </li>
        <li>
        <Link to='cart' style={{color:'white',textDecoration:'none'}}> Cart</Link> 
        </li>
        <li>
          <Link to='books' style={{color:'white',textDecoration:'none'}}>Catalogue</Link>  
        </li>
        <li>
            Blog
        </li>
    </ul>

</div>:""}
      <Switch>
        <Route path='/' exact>
          
          {isLoggedIn? <Home/>:<Auth/>}
        </Route>
        <Route path='/books' exact>
          <Books/>
        </Route>
        <Route path='/cart' exact>
          <Cart/>
        </Route>
        </Switch>
        {isLoggedIn ?<div className='tops'>
          <ul>
              <li>
              <Link to='' style={{color:'white',textDecoration:'none'}}> <AiOutlineHome style={{width:'25px',height:'35px'}}/></Link>
              </li>
              <li>
              <Link to='cart' style={{color:'white',textDecoration:'none'}}> <BsCart style={{width:'25px',height:'35px'}}/>{totalquantity}</Link> 
              </li>
              <li>
              <Link to='books' style={{color:'white',textDecoration:'none'}}><MdOutlineLibraryBooks style={{width:'25px',height:'35px'}}/></Link>  
              </li>
              <li>
                <SiBloglovin style={{width:'25px',height:'35px'}}/>
              </li>
          </ul>

      </div>:''}
        </BrowserRouter>
        

    {isLoggedIn ?<Footer/>:''}
        
      
    </div>
  );
}

export default App;
