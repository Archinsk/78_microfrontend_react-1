import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent'
import cardsData from './formData';
import Card from './components/Card'

function App() {
  console.log(cardsData);
  const cards = cardsData.map(cardItemData => <Card cardData={cardItemData} key={cardItemData[1].value} />)
  
  return (
    <div className="App">
      <MainContent formData={cards}/>
    </div>
  );
}

export default App;
