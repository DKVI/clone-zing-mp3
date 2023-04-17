export const setJobs = (payload) => {
  return {
    type: "set",
    payload,
  };
};

export const addJobs = (payload) => {
  return {
    type: "add",
    payload,
  };
};

export const deleteJobs = (payload) => {
  return {
    type: "delete",
    payload,
  };
};
