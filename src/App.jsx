
//Components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { TransactionForm } from './components/TransactionForm'

//Context
import { Provider } from './context/GlobalState'

function App() {
  return (
    <Provider>
      <Header />
      <div className="Container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <TransactionForm />
      </div>
    </Provider>
  );
}

export default App;

