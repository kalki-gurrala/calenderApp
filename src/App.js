import "./App.css";
import Calender from "./component/calender/Calender";
import store from "./store/Store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Calender />
      </Provider>
    </div>
  );
}

export default App;
