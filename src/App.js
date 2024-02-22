import './App.css';

function App() {
    const handleOuter = () => {
        console.log("Outer")
    }
    const handleInner = (e) => {
        e.stopPropagation();
        console.log("Inner")
    }
  return (
    <div className="App">
      <button onClick={handleOuter}>
        Outer Button
        <button onClick={handleInner}>
            InnerButton
        </button>
      </button>
    </div>
  );
}

export default App;
