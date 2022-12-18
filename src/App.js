
import './App.css';
import Expenses from './components/Expenses';
import Form from "./components/addExpense"
import Balance from './components/Balance';
import IncExp from './components/IncExp';
function App() {
  return (
    <div className="container">
      <Balance />
      <IncExp />
      <h3>History</h3>
      <Expenses />
      <Form />
    </div >

  );
}

export default App;
