import { createStore } from "redux";
import { reducers } from "../reducers/reducer";

const store = createStore(reducers);

//ui component --> has state values--> talking --> all the reducer functions

export default store;
