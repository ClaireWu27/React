const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];


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
  const pizzas=pizzaData    

  
  const numPizzas=pizzas.length
return (
<main className="menu">
<h2>Our Menu</h2>
{numPizzas>0 ?
<ul className='pizzas'>
{pizzas.map(pizza=>
  (<Pizza pizzaObj={pizza} key={pizza.name} 
   />))}
   </ul>: <p>We're still working on our menu. Please come back late :)</p>}


{/* <Pizza name='Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='./spinaci.jpg' price={10} />
<Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion' photoName='./funghi.jpg' price={12} /> */}

</main>
)
}
function Pizza({pizzaObj}){
//  console.log(pizzaObj)
  // if(pizzaObj.soldOut) return null
  return (
    <li className={`pizza ${pizzaObj.soldOut?'sold-out':''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>
        {pizzaObj.soldOut? 
        <span>SOLD OUT</span>
        : pizzaObj.price}
        </span>
      </div>
      
    </li>
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
// return <footer className="footer">{new Date().toLocaleString()}</footer>

return (
  <footer className='footer'>
    {isOpen?<Order closeHour={closeHour} openHour={openHour}/>:(<p>We're happy to meet you between {openHour}:00 and {closeHour}:00.</p>)}
    
  </footer>
)
}

function Order({closeHour,openHour}){
  return    (
    <div className='order'>
      <p>We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online</p>
      <button className='btn'>Order</button>
      </div>)

  
}


export default App;
