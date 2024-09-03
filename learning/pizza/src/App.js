
function App() {
  return (
    <div className="container">
     <Header/>
     <Menu/>
     <Footer/>
    </div>
  );
}
function Header(){
  // const style={color:'pink',fontSize:'48px',textTransform:'uppercase'}
  return (  
  <header className="header">
  <h1>Fast React Pizza Co.</h1>
  </header>

  )


}
function Menu(){
return (
<main className="menu">
<h2>Our Menu</h2>
<Pizza name='Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='./spinaci.jpg' price={10} />
<Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion' photoName='./funghi.jpg' price={12} />

</main>
)
}
function Pizza(props){
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name}/>
      <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price+3}</span>
      </div>
      
    </div>
  )
}
function Footer(){
const hour=new Date().getHours()
const openHour=12
const closeHour=22
const isOpen=hour>=openHour && hour<=closeHour
console.log(isOpen)
// if(hour>=openHour && hour<=closeHour) {
//   alert("We're currently open!")
// }
//    else{
//     alert("Sorry We're closed")
// }
return <footer className="footer">{new Date().toLocaleString()}</footer>
}


export default App;
