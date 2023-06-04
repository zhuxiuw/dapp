import Searcher from '../components/searcher';
// import Cat from '../components/cat';
import Card from '../components/card';
import Bottom from '../components/bottom';



function Home(){
  return (
    <div style={{height:"100vh",width:"100vw", display:"flex",flexDirection:"column",justifyItems:"center"}}>
    <Searcher/>
    <Card/>
    {/* <Cat/> */}
    <Bottom/>
    </div>
  )
}

export default Home;

// backgroundColor:"#a4e8f5",



