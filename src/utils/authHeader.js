export default function authHeader(thunkAPI) {
    return {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
}