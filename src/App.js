import './App.css';
import A from './ContextApi-1/A';
import Child1 from './ContextApi-2/Child1';

function App() {
  return (
    <>

      <div className="App">
        <div className='AppLeftContainer'>
          <h1>- Parent to Child -</h1>
          <hr />
          <hr />
          <A />
        </div>

        <div className='AppRightContainer'>
          <h1>- Child to Parent -</h1>
          <hr />
          <hr />
          <Child1 />
        </div>
      </div>
    </>
  );
}

export default App;
