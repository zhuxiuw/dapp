import { Router,Route,useNavigate,Link } from "react-router-dom";

function Item(props) {
  console.log(props);
  return (
 
     <div className="drop-card_comp">
          <div className="d-card_chip-wrap-copy">
           <div class="first-chip">
            <div class="d-card_chip-wrap">
            
          
            <div>IN</div><div class="time-difference">7 HRS</div></div></div>
          </div>

    


          <Link to={`/shop/${props.id}`} style={{border:"5px solid rgb(204, 237, 247)"}}>
          <img loading="lazy" src={props.picture}  alt="" sizes="(max-width: 479px) 77vw, 369px"     class="d-card_img"></img>
          </Link>
          <div class="d-card_collection-name"><p>{props.name}</p></div>
          <div class="d-card_data-wrap">
            <div class="d-card_artist-wrap">
              <img loading="lazy" style={{marginRight:"10px",}} src="https://assets-global.website-files.com/6171adb6a942ed69f5e6b5ee/6446f67c6502b68a2f5f3ce6_robo_1106%201.png" alt="" sizes="100vw" srcset="https://assets-global.website-files.com/6171adb6a942ed69f5e6b5ee/6446f67c6502b68a2f5f3ce6_robo_1106%201-p-500.png 500w, https://assets-global.website-files.com/6171adb6a942ed69f5e6b5ee/6446f67c6502b68a2f5f3ce6_robo_1106%201.png 800w" class="dcard_artist-icon"></img>
              {props.hostname}
            </div>
            <div class="d-card_content">
              <div class="d-card_coin-wrap">
                <img loading="lazy" src="https://assets-global.website-files.com/6171adb6a942edb106e6b5f0/642b288760af28fdecbd74b4_Icon%20L.svg" alt="" class="d-card_icon w-condition-invisible"></img>
                <div class="text-body-md text-color-muted text-weight-md w-condition-invisible">{props.price}</div>
                 
              </div>
              <div class="d-card_coin-wrap">
                <img loading="lazy" src="https://assets-global.website-files.com/6171adb6a942edb106e6b5f0/642b28874547bd41ecab7892_Icon%20L-1.svg" alt="" class="d-card_icon"></img>
                <div class="text-body-md text-color-muted text-weight-md w-condition-invisible w-dyn-bind-empty"></div>
                <div class="text-body-md text-color-muted text-weight-md">{props.number}</div>
              </div>
            </div>
          </div>
        </div>
       
  
  
  )}

  export default Item;
