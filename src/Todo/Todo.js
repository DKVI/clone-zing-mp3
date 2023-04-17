import { useRef, useReducer, useEffect } from "react";
import { innit } from "./store";
import reducer from "./reducer";
import { addJobs, deleteJobs, setJobs } from "./action";
function Todo() {
  const innitState = JSON.parse(localStorage.getItem("store"));
  const [state, dispatch] = useReducer(
    reducer,
    innitState ? innitState : innit
  );
  const inputRef = useRef();
  useEffect(() => {
    localStorage.setItem(
      "store",
      JSON.stringify({ job: state.job, jobs: state.jobs })
    );
    console.log(localStorage.getItem("store"));
  }, [state]);

  function handleAddJobs() {
    dispatch(addJobs(state.job));
    dispatch(setJobs(""));
    inputRef.current.focus();
  }

  return (
    <div className="w-[600px] bg-teal-500 rounded-[40px] m-[auto] px-[40px] py-[20px]">
      <div className="w-[100%] flex">
        <input
          ref={inputRef}
          value={state.job}
          onChange={(e) => {
            dispatch(setJobs(e.target.value));
          }}
          className="w-[80%] px-[20px] py-[10px] rounded-[20px] outline-none"
          placeholder="Enter todo..."
        />
        <button
          onClick={handleAddJobs}
          className="w-[20%] bg-cyan-200 rounded-[20px] text-[20px] text-white outline-none"
        >
          Add
        </button>
      </div>
      <div className="mt-[40px]">
        <ul>
          {state.jobs.map((job, index) => (
            <li className="flex h-[100%] mt-5" key={index}>
              <p className="w-[90%] p-[10px] bg-white">{job}</p>
              <button
                onClick={() => {
                  dispatch(deleteJobs(index));
                }}
                className="w-[10%] bg-slate-500 text-white"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
