
import Seracher from "../components/searcher"
import Item from "../components/item";
import Search from "../components/search";
import Footer from "../components/Footer";
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


import React, { useState } from 'react';


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


 const sampleIndex=[1,2,3,4,5,6,7,8,9,10,11,12,13]                       


function Shop(){
    const [currentPage, setCurrentPage] = useState(1);
    const nextPage = () => {
      setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
      setCurrentPage(currentPage - 1);
    };

    const goToPage = (page) => {
      setCurrentPage(page);
    };

    const totalPages = Math.ceil(datas.length / 8);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  

    const renderSamples = () => {
      const startIndex = (currentPage - 1) * 8;
      const endIndex = Math.min(startIndex + 8, datas.length);

      const samples = datas.slice(startIndex, endIndex);

      const rows = [];
      const rowCount = Math.ceil(samples.length / 4);

      return Array.from({ length: rowCount }, (_, rowIndex) => {
        const rowStartIndex = rowIndex * 4;
        const rowEndIndex = Math.min(rowStartIndex + 4, samples.length);
        return (
          <div key={rowIndex} className="columns">
            {samples.slice(rowStartIndex, rowEndIndex).map((data, index) => (
              <Item key={index} id={data.id} name={data.name} hostname={data.picname} price={data.price} number={data.number}  picture={data.picture} />
            ))}
            </div>    
        )
            
      })   
    };

    return (
      <div>
        <Seracher/>
        <Search/>
        {renderSamples()}
        <div style={{marginLeft:"50px",marginRight:"50px", display:"flex", flexDirection:"row", height:"50px",marginTop:"60px", alignItems:"center", justifyContent:"space-between"}}>
          <div>
          {pageNumbers.map((pageNumber) => (
            <button  key={pageNumber}  onClick={() => goToPage(pageNumber)} type="button" className={pageNumber === currentPage ? 'active' : 'inactive'}>{pageNumber}</button>
          ))}
        
          </div>
        
          <div >
            <button type="button" onClick={prevPage} disabled={currentPage === 1} style={{fontSize:"20px", color:"white",marginRight:"30px", backgroundColor:"pink", borderRadius:"5px",width:"auto",height:"35px"}}>above</button>
            <button type="button" onClick={nextPage}  disabled={currentPage === Math.ceil(datas.length / 8)} style={{fontSize:"20px", color:"white",backgroundColor:"pink", borderRadius:"5px",width:"auto",height:"35px"}}>next</button>
          </div>
        </div>
        <Footer/>
      </div>
    );

    


  
}

export default Shop;




