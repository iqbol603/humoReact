import React from 'react';
import Button from './button/Button'; 
import UserProfile from './user_profile/UserProfile';
import Header from './header/Header';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('Кнопка была нажата!');
    // Здесь вы можете выполнить нужные действия при нажатии на кнопку
  };


  //----ИЗУЧИТЬ ПРО РЕНДЕР 
  //----useEffect  ИЗУЧИТЬ 

  return (
   
    <div className="App">
       <Header firstName="John" lastName="Doe" role="admin" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Button onClick={handleClick} text="Нажми меня" />
        <div className='card'>
              <UserProfile name="John Doe" age={25} email="john@example.com" />  
        </div>
        <div className='card'>
              <UserProfile name="John Doe" age={25} email="john@example.com" />  
        </div>
    
      </header>
      
    </div>
  );
}

export default App;
