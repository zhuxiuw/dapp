import caticon from "../img/caticon.png"
import { Link } from "react-router-dom";

function Seracher() {
  return (

  <div className="searchbar">
      <div className='left'>
        <img style={{height:"30px",marginRight:"15px",}} src={caticon}></img>
        <p style={{marginRight:"10px",color:"pink",}}> Catopia</p>
        <p style={{fontSize:"10px",color:"pink", }}>Locked wallet:MetaMask</p>

      </div>
      <div className="right">
    
      <div style={{marginRight:"70px"}}><Link to="/" style={{color:"black", fontWeight:"lighter", fontSize:"28px", fontFamily:"Pacifico", textDecoration: "none"}} >Home</Link></div>
        <div style={{marginRight:"70px"}}><Link to="/shop" style={{color:"black", fontWeight:"lighter", fontSize:"28px", fontFamily:"Pacifico", textDecoration: "none"}} >Shop</Link></div>
        <div style={{marginRight:"0",}}><Link to="/shop" style={{color:"black", fontWeight:"lighter", fontSize:"28px", fontFamily:"Pacifico", textDecoration: "none"}} >Begin</Link></div>
      </div>
     </div>

  )}

  export default Seracher;
