import { useDispatch } from "react-redux";
import {
  handleSetError,
  handleSetLoading,
  handleFetchRequest,
} from "./common/Redux/Reducer/Action";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={() => dispatch(handleSetError(true))}>Error</button>
      <button onClick={() => dispatch(handleSetError(false))}>Fixed</button>

      <br />
      <br />

      <button onClick={() => dispatch(handleSetLoading(true))}>loading</button>
      <button onClick={() => dispatch(handleSetLoading(false))}>
        un-loading
      </button>

      <br />
      <br />
      <br />

      <button onClick={() => dispatch(handleFetchRequest())}>
        Fetch Data From API
      </button>
    </div>
  );
}

export default App;
