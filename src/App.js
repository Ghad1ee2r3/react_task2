import React from 'react';
import logo from './logo.svg';
import './App.css';
// Data
import items from "./items";
// Style
import styles from "./styles";
//const styles = {
 // text: { textAlign: "center" },
 // shopImage: {
 //   display: "block",
  //  marginLeft: "auto",
  //  marginRight: "auto",
  //  width: "50%",
  //},
//};
function App() {
 

  const itemsList = items.map((item) => (
    <div key={item.id}>
      <img
        style={styles.shopImage}
        alt={item.name}
        src={item.image}
      />
       <p style={styles.text}>{item.id}</p>
      <p style={styles.text}>{item.name}</p>
      <p style={styles.text}>{item.price} SAR</p>
    </div>
  ));
  
  
  return (
    <div className="App">
 <div style={styles.list}>{itemsList}</div>
    </div>
  );
}

export default App;
