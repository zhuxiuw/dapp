import weixin from "../img/weixin.jpg"


function Footer() {
  return (

  <div style={{display:"flex", flexDirection:"column" , marginTop:"20px",}}>

    <hr></hr>
    <div className="foot">
    <div style={{marginRight:"200px"}}>
      <ul>
        <li>our team:</li>
        <li>xiuwenZhu</li>
        <li>jiahaoLi

        </li>
      </ul>
    </div>
    
    <div style={{display:"flex", flexDirection:"column"}}>
      <span>please contact us with Weixin if you have any trouble</span>
      <img  style={{width:"50px", height:"auto", marginTop:"30px"}} src={weixin} alt="none">

      </img>

    </div>
    
      
    </div>




  </div>

 

  )}

  export default Footer;

