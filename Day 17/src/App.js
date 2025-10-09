// import logo from './logo.svg';
// import './App.css';
 import LoginForm from './LoginForm';
import PasswordGenerator from './passwordGenerator';
import DataTableFetcherAxios from './Json_url';
// import RefClassEx from './RefClassEx';
// import RefFuncEx from './RefFuncEx';
function App() {
  return (
    <div className="App">
      {/* <RefClassEx></RefClassEx>
      <RefFuncEx></RefFuncEx> */}
      <DataTableFetcherAxios></DataTableFetcherAxios>
      <PasswordGenerator></PasswordGenerator>
       <LoginForm></LoginForm> 
    </div>
  );
}

export default App;
