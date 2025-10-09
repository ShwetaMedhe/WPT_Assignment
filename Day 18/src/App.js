// import logo from './logo.svg';
// import './App.css';
 
import PasswordGenerator from './PassGen_usecallback';
import ErrorBoundary from './Error_boundary';
import Counter from "./Counter";
// import RefClassEx from './RefClassEx';
// import RefFuncEx from './RefFuncEx';
function App() {
  return (
    <div className="App">
      {/* <RefClassEx></RefClassEx>
      <RefFuncEx></RefFuncEx> */}
     
      <PasswordGenerator></PasswordGenerator>
      
   
    <ErrorBoundary>
                <Counter></Counter>
            </ErrorBoundary>
    </div>
  );
}

export default App;
