import { ADD_JOB, SET_JOB, DELETE_JOB } from "./constant";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    case DELETE_JOB:
      console.log (action.payload)
      const newState = state.jobs.splice (action.payload, 1)
      return {...state, jobs: [...state.jobs]}
    default:
      return new Error("invalid action");
  }
}
