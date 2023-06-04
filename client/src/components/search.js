import { Link } from "react-router-dom";

function Search() {
  return (
    <>
    <div class="sc-chKnlQ  hFHweo ">
      <button type="button" class="sc-dGHKFW gamRXA ">
        <svg
          class="IconV2 IconV2--position-default IconV2--display-inlineBlock"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#c4c3c0"
            strokeWidth="1.5"
            transform="matrix(-1 0 0 1 12.48 2.56)"
            vector-effect="non-scaling-stroke"
          >
            <g strokeLinecap="round">
              <path d="M0 1.28h5.04m2.76 0h1.16M0 5.12h1.186m2.86 0H8.96M0 9.28h5.117m2.787 0H8.96"></path>
            </g>
            <circle cx="6.56" cy="1.12" r="1.12"></circle>
            <circle cx="2.72" cy="5.12" r="1.12"></circle>
            <circle cx="6.56" cy="9.12" r="1.12"></circle>
          </g>
        </svg>
        choice
      </button>
      
      <div class="SearchBar">
        <div class="SearchBar-container">
          <div class="SearchBar-inputContainer">
            <div class="SearchBar-icon">
              <svg
                class="IconV2 IconV2--position-default IconV2--display-inlineBlock"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="icon/search"
                    class="IconSearch"
                    stroke="#c4c3c0"
                    strokeWidth="1.5"
                  >
                    <g id="icon-search-copy">
                      <path
                        d="M10.5709785,10.5709785 L10.571001,10.570956 C12.8096551,8.33249161 12.8096551,4.6669393 10.5708661,2.42890911 C8.3332504,0.190344899 4.66769809,0.190344899 2.42890911,2.42913385 C0.190344899,4.6667496 0.190344899,8.33230191 2.42913385,10.5710909 C4.6667496,12.8096551 8.33230191,12.8096551 10.5709785,10.5709785 Z"
                        id="Fill-1"
                      ></path>
                      <path
                        d="M10.9111111,10.9111111 L13.7555556,13.7555556"
                        id="Line"
                        strokeLinecap="round"
                      ></path>
                      /&gt;
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <input
              type="text"
              class="SearchBar-input"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              value="name "
              style={{ color: "rgb(196, 195, 192)", fontSize: "16px" }}
            ></input>
            <div class="SearchBar-actionGroup">
              <button type="button" class="SearchBar-action">
                submit
              </button>
            </div>
          </div>
        </div>
      </div> 
    </div>

    <div style={{display:"flex", justifyContent:"space-between",flexDirection:"row",alignItems: "center"}}>
      <div style={{display:"flex",flexDirection:"row",marginLeft:"50px", }}>
      <div  display={{flex:"1"}}>
      <div role="checkbox" class="Checkbox Checkbox--size-undefined Checkbox--checked" aria-checked="true">
        <input id="navigation.tabs.sale" class="Checkbox-input" type="checkbox" checked="">
        </input>
        <label class="Checkbox-label" for="navigation.tabs.sale">
        <span class="Checkbox-label-icon">
          <svg class="IconV2 Checkbox-label-iconcheck IconV2--position-default IconV2--display-inlineBlock" width="16" height="16" viewBox="0 0 16 16">
            <path fill="none" fill-rule="evenodd" stroke="#ef52d1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5.333 7.023L8.06 10l5.843-7.737a.5.5 0 0 1 .9.301v10.272a2 2 0 0 1-2 2H3.11a2 2 0 0 1-2-2V3.072a2 2 0 0 1 2-2H9.73" vector-effect="non-scaling-stroke"></path></svg></span>
            <span style={{textAlign: "right", marginLeft: "0.8rem",fontFamily:"Pacifico",fontWeight:"lighter", fontSize:"20px"}}>adopt</span>
            </label>
      </div>
      </div>



      <div style={{fontWeight:"lighter", fontSize:"20px", fontFamily:"Pacifico",marginLeft:"40px",color:"rgb(130, 129, 125)", display:"flex", alignItems: "center",}}>Total:<span>241,105</span></div>
      </div>



      <div style={{display:"flex",flexDirection:"row",marginRight:"50px"}}>
      <div style={{fontWeight:"lighter", fontSize:"20px", fontFamily:"Pacifico",marginRight:"50px", display:"flex", alignItems: "center",}}>
        price

      </div>

    
      <div style={{fontWeight:"lighter", fontSize:"20px", fontFamily:"Pacifico",display:"flex", alignItems: "center",}}>
        like

      </div>
      </div>
    



    </div>
     
</>



  );
}

export default Search;
