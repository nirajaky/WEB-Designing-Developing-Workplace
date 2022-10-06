export const handleSetLoading = (payload) => ({
  type: "SET_LOADING",
  payload,
});

export const handleSetError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const handleSetResponse = (payload) => ({
  type: "SET_RESPONSE_DATA",
  payload,
});

export const handleFetchRequest = () => ({
  type: "API_REQUEST",
  payload: {
    method: "GET",
    url: "http://localhost:8080/product",
    handleSuccess: handleSetResponse,
  },
});
