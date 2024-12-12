import Header from "./componments/Header";
import Main from "./componments/main";
const App = () => {
  return(
    <div className="App" style={{backgroundColor: "rgb(248 248 248)"}}>
      <Header />
      <div style={{display: "flex" , justifyContent: "center"}}>
        <Main />
      </div>
    </div>
  );
}

export default App;