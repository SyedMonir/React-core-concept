// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Alomgir', 'BappaRaz', 'Dildar', 'Shubo'];
  const products = [
    { name: 'Photoshop', price: '$99.99/mo' },
    { name: 'Office', price: '$49.59/mo' },
    { name: 'Illustator', price: '$69.69/mo' }
  ];

  // const productNames = products.map(product => product.name)
  // const nayokNames = nayoks.map(nayok => nayok)
  // console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Boy!</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product products={pd}></Product>)
        }

        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product products={products[2]}></Product> */}

        <Person name="Rubul Bollam" nayika="Mousumi Akter"></Person>
        <Person name={nayoks[0]} nayika="Sabana Lux"></Person>
        <Person name="Dipjol Takla" nayika="Dana Kata Petni"></Person>
        <Person name="Sakib Begom" nayika="Opu Churni"></Person>
      </header>
    </div>
  );
};



function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
};







function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   // const newCount = count + 1;
  //   setCount(count + 1);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
};





function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    color: 'black',
    height: '200px',
    width: '200px',
    float: 'left'

  }
  const { name, price } = props.products;
  // console.log(name,price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      {/* <h3>{props.products.price}</h3> eta uporer product er direct object access er jonno */}
      <button>Buy Now</button>
    </div>
  )
}




function Person(props) {
  const personStyle = {
    width: '50%',
    // display: 'flex',
    // textAlign: 'center',
    border: '2px solid cyan',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px'
  }
  return (
    <div style={personStyle}>
      {/* style={{border: '2px solid grey', padding:'10px'}} */}
      <h1>{props.name}</h1>
      <h2>Premika: {props.nayika}</h2>
      <h3>Hero Man of the year!</h3>
    </div>
  );

};



export default App;
