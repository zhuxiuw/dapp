import Seracher from "../components/searcher";
import pig2 from "../img/profile-2.png";
import { useParams } from 'react-router-dom';
import cat1 from "../img/cat1.png"
import cat2 from "../img/cat2.png"
import cat3 from "../img/cat3.png"
import cat4 from "../img/cat4.png"
import cat5 from "../img/cat5.png"
import cat6 from "../img/cat6.png"
import cat7 from "../img/cat7.png"
import cat8 from "../img/cat8.png"
import cat9 from "../img/cat9.png"
import cat10 from "../img/cat10.png"
import cat11 from "../img/cat11.png"
import cat12 from "../img/cat12.png"
import cat13 from "../img/cat13.png"

const datas=[{picture:cat2,id:1,
  name:"Whiskers",picname:"Emily",price:"0.1eth",number:"0"},{picture:cat1,id:2,
    name:"Oliver",picname:"Zvjsk",price:"0.05eth",number:"10"},{picture:cat3 ,id:3,
      name:"Luna",picname:"Benjamin",price:"0.2eth",number:"1"},{picture:cat4 ,id:4,
        name:"Bella",picname:"luminous",price:"0.5eth",number:"100"},
        {picture:cat5,id:5,
          name:"Whiskers",picname:"Emily",price:"0.1eth",number:"0"},
  
          {picture:cat6,id:6,
            name:"Shadowstrike",picname:"Zvjsk",price:"0.05eth",number:"10"},{picture:cat7 ,id:7,
              name:"Blaze",picname:"Benjamin",price:"0.2eth",number:"1"},{picture:cat8 ,id:8,
                name:"Stormrider",picname:"luminous",price:"0.5eth",number:"100"},
              
                {picture:cat9 ,
                  name:"Blaze",id:9,cname:"Benjamin",price:"0.2eth",number:"1"},{picture:cat10 ,id:10,
                    name:"Stormrider",picname:"luminous",price:"0.5eth",number:"100"},
                  
                    {picture:cat11 ,id:11,
                      name:"Blaze",picname:"Benjamin",price:"0.2eth",number:"1"},{picture:cat12 ,id:12,
                        name:"Stormrider",picname:"luminous",price:"0.5eth",number:"100"},
                        {picture:cat13 ,
                          name:"Blaze",picname:"Benjamin",price:"0.2eth",number:"1"}]




function Goods() {
  // const { id } = useParams(); // 获取路由参数中的商品ID
  // console.log(id);
  // const product = datas.find((p) => p.id === parseInt(id));

  // if (!product) {
  //   return <div>商品不存在</div>;
  // }

  // const { pic, num, nam,picnam,pric,numbe } ={"1", "2","Whiskers","Emily","0.1eth","2"};
  
  const pic=1;
  const num=2;
  const nam=3;
  const picnam=4;
  const pric=5;
  const numbe=6;


  return (
    <div>
      <Seracher />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <img
            class="KittyGraphic-image"
            src={cat1}
            style={{width:"30%",height:"auto"}}
           
            alt="2"
          ></img>
        </div>
      </div>
      <div>
        <div>
          <div class="spp">
            <p>{nam}</p>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>###</p>
            <p style={{ fontSize: "30px", fontWeight: "500" }}>Introduction</p>
            <p class="speci" style={{ fontSize: "20px", fontWeight: "300" }}>
              hi, I 'm from china, I love eating and playing some games
            </p>
          </div>

          <div>
            <button></button>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display:"flex",alignContent:"center", alignItems:"center",justifyContent:"center",flexDirection:"row",textAlign: "left", marginLeft: "5%" }}>
              <img
                src={pig2}
                style={{ width: "40px", height: "40px" }}
                alt="Info"
              ></img>
              <div style={{display:"flex", textAlign:"centetr", flexDirection:"column"}}>
              <p
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  marginBottom: "0",
                }}
              >
                Hatched by{" "}
              </p>
              <p style={{
                  // display: "inline-block",
                  marginLeft: "10px",
                  marginTop: "0",
                }}>{picnam}</p>
              </div>
            </div>

            <div style={{ display:"flex",alignContent:"center", alignItems:"center",justifyContent:"center",flexDirection:"row",textAlign: "left", marginLeft: "50px" }}>
              <img
                src={pig2}
                style={{ width: "40px", height: "40px" }}
                alt="Info"
              ></img>
              <div style={{display:"flex", textAlign:"centetr", flexDirection:"column"}}>
              <p
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  marginBottom: "0",
                }}
              >
                BirthDay{" "}
              </p>
              <p style={{
                  // display: "inline-block",
                  marginLeft: "10px",
                  marginTop: "0",
                }}>2023/4/12</p>
              </div>
            </div>


            
           
          </div>
          <div style={{textAlign: "left", marginLeft: "5%" ,marginTop:"40px"}} class="spp">
        <button class="spp" style={{fontSize:"30px",fontFamily:"Pacifico"}}>Buy Now</button>
        </div>
        </div>
       
      
        {/* <div class="sc-iNWwEs eegQtV">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "100%",
              height: "100%",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_52">
                <rect width="64" height="64" x="0" y="0"></rect>
              </clipPath>
              <mask id="__lottie_element_57" mask-type="alpha">
                <g
                  style={{ display: "none" }}
                  transform="matrix(1,0,0,1,32,32)"
                  opacity="1"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="url(#__lottie_element_60)"
                      fillOpacity="1"
                      d=" M0,-31 C0,-31 0,-31 0,-31 C17.121000289916992,-31 31,-17.121000289916992 31,0 C31,0 31,0 31,0 C31,17.121000289916992 17.121000289916992,31 0,31 C0,31 0,31 0,31 C-17.121000289916992,31 -31,17.121000289916992 -31,0 C-31,0 -31,0 -31,0 C-31,-17.121000289916992 -17.121000289916992,-31 0,-31z"
                    ></path>
                  </g>
                </g>
              </mask>
              <linearGradient
                id="__lottie_element_60"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1="-15190"
                y1="-15252"
                x2="0"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(204,236,223)"
                  stopOpacity="0.8989999890327454"
                ></stop>
                <stop
                  offset="50%"
                  stopColor="rgb(209,242,209)"
                  stopOpacity="0.9490000009536743"
                ></stop>
                <stop
                  offset="100%"
                  stopColor="rgb(213,248,194)"
                  stopOpacity="1"
                ></stop>
              </linearGradient>
              <mask id="__lottie_element_64" mask-type="alpha">
                <g
                  style={{ display: "none" }}
                  transform="matrix(1,0,0,1,32,32)"
                  opacity="1"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="url(#__lottie_element_67)"
                      fillOpacity="1"
                      d=" M0,-31 C0,-31 0,-31 0,-31 C17.121000289916992,-31 31,-17.121000289916992 31,0 C31,0 31,0 31,0 C31,17.121000289916992 17.121000289916992,31 0,31 C0,31 0,31 0,31 C-17.121000289916992,31 -31,17.121000289916992 -31,0 C-31,0 -31,0 -31,0 C-31,-17.121000289916992 -17.121000289916992,-31 0,-31z"
                    ></path>
                  </g>
                </g>
              </mask>
              <linearGradient
                id="__lottie_element_67"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1="-15190"
                y1="-15252"
                x2="0"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(204,236,223)"
                  stopOpacity="0.8989999890327454"
                ></stop>
                <stop
                  offset="50%"
                  stopColor="rgb(209,242,209)"
                  stopOpacity="0.9490000009536743"
                ></stop>
                <stop
                  offset="100%"
                  stopColor="rgb(213,248,194)"
                  stopOpacity="1"
                ></stop>
              </linearGradient>
              <mask id="__lottie_element_71" mask-type="alpha">
                <g
                  transform="matrix(1,0,0,1,32,32)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="url(#__lottie_element_74)"
                      fillOpacity="1"
                      d=" M0,-31 C0,-31 0,-31 0,-31 C17.121000289916992,-31 31,-17.121000289916992 31,0 C31,0 31,0 31,0 C31,17.121000289916992 17.121000289916992,31 0,31 C0,31 0,31 0,31 C-17.121000289916992,31 -31,17.121000289916992 -31,0 C-31,0 -31,0 -31,0 C-31,-17.121000289916992 -17.121000289916992,-31 0,-31z"
                    ></path>
                  </g>
                </g>
              </mask>
              <linearGradient
                id="__lottie_element_74"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1="-15190"
                y1="-15252"
                x2="0"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(204,236,223)"
                  stopOpacity="0.8989999890327454"
                ></stop>
                <stop
                  offset="50%"
                  stopColor="rgb(209,242,209)"
                  stopOpacity="0.9490000009536743"
                ></stop>
                <stop
                  offset="100%"
                  stopColor="rgb(213,248,194)"
                  stopOpacity="1"
                ></stop>
              </linearGradient>
              <mask id="__lottie_element_78" mask-type="alpha">
                <g
                  transform="matrix(1,0,0,1,32,32)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="url(#__lottie_element_81)"
                      fillOpacity="1"
                      d=" M0,-31 C0,-31 0,-31 0,-31 C17.121000289916992,-31 31,-17.121000289916992 31,0 C31,0 31,0 31,0 C31,17.121000289916992 17.121000289916992,31 0,31 C0,31 0,31 0,31 C-17.121000289916992,31 -31,17.121000289916992 -31,0 C-31,0 -31,0 -31,0 C-31,-17.121000289916992 -17.121000289916992,-31 0,-31z"
                    ></path>
                  </g>
                </g>
              </mask>
              <linearGradient
                id="__lottie_element_81"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1="-15190"
                y1="-15252"
                x2="0"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(204,236,223)"
                  stopOpacity="0.8989999890327454"
                ></stop>
                <stop
                  offset="50%"
                  stopColor="rgb(209,242,209)"
                  stopOpacity="0.9490000009536743"
                ></stop>
                <stop
                  offset="100%"
                  stopColor="rgb(213,248,194)"
                  stopOpacity="1"
                ></stop>
              </linearGradient>
              <linearGradient
                id="__lottie_element_88"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1="-15190"
                y1="-15252"
                x2="0"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(204,236,223)"
                  stopOpacity="0.8989999890327454"
                ></stop>
                <stop
                  offset="50%"
                  stopColor="rgb(209,242,209)"
                  stopOpacity="0.9490000009536743"
                ></stop>
                <stop
                  offset="100%"
                  stopColor="rgb(213,248,194)"
                  stopOpacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <g clipPath="url(#__lottie_element_52)">
              <g
                transform="matrix(1,0,0,1,32,32)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="url(#__lottie_element_88)"
                    fillOpacity="1"
                    d=" M0,-31 C0,-31 0,-31 0,-31 C17.121000289916992,-31 31,-17.121000289916992 31,0 C31,0 31,0 31,0 C31,17.121000289916992 17.121000289916992,31 0,31 C0,31 0,31 0,31 C-17.121000289916992,31 -31,17.121000289916992 -31,0 C-31,0 -31,0 -31,0 C-31,-17.121000289916992 -17.121000289916992,-31 0,-31z"
                  ></path>
                </g>
              </g>
              <g mask="url(#__lottie_element_78)" style={{ display: "block" }}>
                <g transform="matrix(1,0,0,1,32.09641647338867,32)" opacity="1">
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,15.760000228881836,30.475000381469727)"
                  >
                    <path
                      fill="rgb(232,199,135)"
                      fillOpacity="1"
                      d=" M125,-12.525500297546387 C125,-12.525500297546387 125,12.525500297546387 125,12.525500297546387 C125,12.525500297546387 -125,12.525500297546387 -125,12.525500297546387 C-125,12.525500297546387 -125,-12.525500297546387 -125,-12.525500297546387 C-125,-12.525500297546387 125,-12.525500297546387 125,-12.525500297546387z"
                    ></path>
                  </g>
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,15.760000228881836,30.475000381469727)"
                  >
                    <path
                      fill="rgb(220,161,116)"
                      fillOpacity="1"
                      d=" M75,-12 C75,-12 75,-11 75,-11 C75,-11 -75,-11 -75,-11 C-75,-11 -75,-12 -75,-12 C-75,-12 75,-12 75,-12z"
                    ></path>
                  </g>
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,15.760000228881836,30.475000381469727)"
                  >
                    <path
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      fillOpacity="0"
                      strokeMiterlimit="4"
                      stroke="rgb(142,99,90)"
                      strokeOpacity="1"
                      strokeWidth="1.5"
                      d=" M75,-12.525500297546387 C75,-12.525500297546387 75,12.525500297546387 75,12.525500297546387 C75,12.525500297546387 -75,12.525500297546387 -75,12.525500297546387 C-75,12.525500297546387 -75,-12.525500297546387 -75,-12.525500297546387 C-75,-12.525500297546387 75,-12.525500297546387 75,-12.525500297546387z"
                    ></path>
                  </g>
                </g>
              </g>
              <g mask="url(#__lottie_element_71)" style={{ display: "block" }}>
                <g
                  transform="matrix(1,0,0,1,30.533416748046875,32)"
                  opacity="1"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(220,161,116)"
                      fillOpacity="1"
                      d=" M1.63100004196167,20.325191497802734 C3.836350202560425,20.325191497802734 5.626923561096191,20.758865356445312 5.626923561096191,21.292999267578125 C5.626923561096191,21.827133178710938 3.836350202560425,22.260807037353516 1.63100004196167,22.260807037353516 C-0.574350118637085,22.260807037353516 -2.3649234771728516,21.827133178710938 -2.3649234771728516,21.292999267578125 C-2.3649234771728516,20.758865356445312 -0.574350118637085,20.325191497802734 1.63100004196167,20.325191497802734z"
                    ></path>
                  </g>
                </g>
              </g>
              <g mask="url(#__lottie_element_64)" style={{ display: "none" }}>
                <g
                  transform="matrix(1,0,0,1,-19.687854766845703,32)"
                  opacity="1"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      fillOpacity="0"
                      strokeMiterlimit="4"
                      stroke="rgb(47,104,62)"
                      strokeOpacity="1"
                      strokeWidth="1.5"
                      d=" M1.1460000276565552,12.300000190734863 C1.8480000495910645,15.63700008392334 1.819000005722046,17.93000030517578 1.7000000476837158,21.34000015258789"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <g
                      opacity="1"
                      transform="matrix(0.9999999403953552,0.00030710012651979923,-0.00030710012651979923,0.9999999403953552,0.0036966800689697266,-0.00043487548828125)"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(179,229,114)"
                          fillOpacity="1"
                          d=" M2.8340001106262207,11.923999786376953 C1.649999976158142,11.54800033569336 -1.25,7.927000045776367 -1.444000005722046,3.7119998931884766 C-2.124000072479248,-1.187999963760376 1.5579999685287476,-4.443999767303467 2.253000020980835,-5.131999969482422 C4.804999828338623,-8.395999908447266 8.692999839782715,-11.034000396728516 14.074999809265137,-11.770000457763672 C17.389999389648438,-6.357999801635742 14.074999809265137,6.192999839782715 2.8350000381469727,11.923999786376953 C2.8350000381469727,11.923999786376953 2.8340001106262207,11.923999786376953 2.8340001106262207,11.923999786376953z"
                        ></path>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(118,196,91)"
                          fillOpacity="1"
                          d=" M3.9040000438690186,-7.111999988555908 C6.616000175476074,-6.822000026702881 11.437999725341797,5.546000003814697 6.238999843597412,10.055999755859375 C5.709000110626221,10.515999794006348 2.5989999771118164,12.041000366210938 1.9730000495910645,11.871999740600586 C-0.765999972820282,9.430999755859375 -1.3279999494552612,8.064000129699707 -2.2230000495910645,6.888000011444092 C-3.552000045776367,5.142000198364258 -3.125999927520752,2.6389999389648438 -1.4199999570846558,-0.9290000200271606 C0.8579999804496765,-4.26200008392334 3.6519999504089355,-7.138999938964844 3.9040000438690186,-7.111999988555908z"
                        ></path>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(249,255,218)"
                          fillOpacity="1"
                          d=" M11.817000389099121,-11.621999740600586 C12.836999893188477,-8.423999786376953 13.654999732971191,-4.116000175476074 11.817000389099121,3.4709999561309814 C16.03700065612793,-3.7669999599456787 14.45199966430664,-1.8020000457763672 14.602999687194824,-6.057000160217285 C14.70300006866455,-8.894000053405762 14.59000015258789,-10.74899959564209 14.262999534606934,-11.621999740600586 C12.633000373840332,-12.180000305175781 11.817000389099121,-12.180000305175781 11.817000389099121,-11.621999740600586z"
                        ></path>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity="0"
                          stroke="rgb(47,104,62)"
                          strokeOpacity="1"
                          strokeWidth="1.5"
                          d=" M8.95199966430664,-4.553999900817871 C7.2779998779296875,-2.697000026702881 4.36299991607666,2.0269999504089355 2.4140000343322754,8.835000038146973 M-1.0520000457763672,-1.4140000343322754 C-1.0089999437332153,-1.468999981880188 1.88100004196167,-5.190999984741211 1.9249999523162842,-5.245999813079834 C4.632999897003174,-8.637999534606934 8.545999526977539,-11.694999694824219 14.300999641418457,-11.694999694824219 C15.656999588012695,-4.328999996185303 14.232999801635742,8.3149995803833 1.3509999513626099,12.329999923706055"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g mask="url(#__lottie_element_57)" style={{ display: "none" }}>
                <g
                  transform="matrix(1,0,0,1,-19.687854766845703,32)"
                  opacity="1"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      fillOpacity="0"
                      strokeMiterlimit="4"
                      stroke="rgb(47,104,62)"
                      strokeOpacity="1"
                      strokeWidth="1.5"
                      d=" M1.1460000276565552,12.300000190734863 C1.8480000495910645,15.63700008392334 1.819000005722046,17.93000030517578 1.7000000476837158,21.34000015258789"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <g
                      opacity="1"
                      transform="matrix(0.9999901652336121,-0.00443090358749032,0.00443090358749032,0.9999901652336121,-0.05354881286621094,0.0075054168701171875)"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(179,229,114)"
                          fillOpacity="1"
                          d=" M1.4429999589920044,12.298999786376953 C-6.416999816894531,12.298999786376953 -19.75200080871582,4.599999904632568 -17.833999633789062,-13.461999893188477 C-10.005999565124512,-14.208999633789062 -4.660999774932861,-11.727999687194824 -0.6840000152587891,-8.027999877929688 C6.343999862670898,-1.4889999628067017 6.517000198364258,9.232000350952148 1.4429999589920044,12.298999786376953z"
                        ></path>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(118,196,91)"
                          fillOpacity="1"
                          d=" M1.909999966621399,11.895999908447266 C-6.410999774932861,11.395000457763672 -19.020999908447266,4.202000141143799 -17.17300033569336,-13.20199966430664 C-16.451000213623047,-3.7799999713897705 -6.60699987411499,9.37399959564209 3.7890000343322754,9.526000022888184 C4.228000164031982,9.531999588012695 2.2249999046325684,11.914999961853027 1.909999966621399,11.895999908447266z"
                        ></path>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(249,255,218)"
                          fillOpacity="1"
                          d=" M-17.645000457763672,-12.71399974822998 C-6.192999839782715,-11.84000015258789 2.2219998836517334,-5.579999923706055 4.671999931335449,7.010000228881836 C4.671999931335449,0.27300000190734863 1.8860000371932983,-6.703000068664551 -2.878000020980835,-10.168000221252441 C-7.642000198364258,-13.633000373840332 -11.467000007629395,-13.295999526977539 -17.645000457763672,-12.71399974822998z"
                        ></path>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity="0"
                          stroke="rgb(47,104,62)"
                          strokeOpacity="1"
                          strokeWidth="1.5"
                          d=" M1.13,11.97 C-0.41,5.21 -5.9,-2.24 -11.46,-5.79 M1.4179999828338623,12.300999641418457 C1.2979999780654907,12.300999641418457 1.1770000457763672,12.300000190734863 1.0540000200271606,12.295999526977539 C-6.84499979019165,12.062999725341797 -19.722999572753906,4.324999809265137 -17.833999633789062,-13.461999893188477 C3.828000068664551,-15.529999732971191 9.36299991607666,7.5 1.4179999828338623,12.300000190734863 C1.4179999828338623,12.300000190734863 1.4179999828338623,12.300999641418457 1.4179999828338623,12.300999641418457z"
                        ></path>
                        <g
                          opacity="1"
                          transform="matrix(1.018630027770996,0,0,1.0002299547195435,0,0)"
                        ></g>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                transform="matrix(-1,0,0,1,33.84641647338867,34.8129997253418)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(-0.21207195520401,-0.9772540330886841,0.9772540330886841,-0.21207195520401,-9.924525260925293,11.834240913391113)"
                >
                  <path
                    fill="rgb(179,229,114)"
                    fillOpacity="1"
                    d=" M1.6936066150665283,8.509358406066895 C1.0604474544525146,7.6620192527771 0.681696355342865,6.284923553466797 1.7209675312042236,3.7079825401306152 C2.9277870655059814,6.36876106262207 2.208237409591675,7.793738842010498 1.710517406463623,8.487253189086914 C1.710517406463623,8.487253189086914 1.6936066150665283,8.509358406066895 1.6936066150665283,8.509358406066895z"
                  ></path>
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    fillOpacity="0"
                    stroke="rgb(47,104,62)"
                    strokeOpacity="1"
                    strokeWidth="1.5"
                    d=" M1.6936066150665283,8.509358406066895 C1.0604474544525146,7.6620192527771 0.681696355342865,6.284923553466797 1.7209675312042236,3.7079825401306152 C2.9277870655059814,6.36876106262207 2.208237409591675,7.793738842010498 1.710517406463623,8.487253189086914 C1.710517406463623,8.487253189086914 1.6936066150665283,8.509358406066895 1.6936066150665283,8.509358406066895z"
                  ></path>
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(47,104,62)"
                    strokeOpacity="1"
                    strokeWidth="1.5"
                    d=" M1.7339999675750732,18.527000427246094 C1.7339999675750732,18.527000427246094 1.92070734500885,11.284072875976562 -1.771875262260437,8.552042007446289"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div> */}
      </div>
    
    </div>
  );
}

export default Goods;

// backgroundColor:"#a4e8f5",
