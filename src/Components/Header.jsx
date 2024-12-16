import React from 'react'
import  { useContext} from './Details/Bikedetails'

function Header() {
  return (
    <div className='header'>
        <h3>header</h3>
       
        <useContext.Consumer>
            {value=>
            <div>cart({value})</div>
            }
        </useContext.Consumer>
    </div>
   
  )
}

export default Header