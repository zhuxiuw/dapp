import caticon from "../img/caticon.png"


function Bottom(){
  return (  
  <div className='bottom'>
    <div style={{fontSize:"30px", fontFamily:"Playfair Display, serif", fontWeight:'bold',}}>introduction</div>
    <div style={{fontSize:"30px", fontFamily:"Playfair Display, serif", fontWeight:'bold',}}>
     
      <img style={{height:"30px",}} src={caticon}></img>
      Cat
    </div>
    <div style={{fontSize:"30px", fontFamily:"Permanent Marker, cursive", fontWeight:'bold',fontStyle:"italic"}}> collect your virtual cat</div>
  </div>
)
}
export default Bottom;