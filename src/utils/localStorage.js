function addUserToLocalStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function removeUserFromLocalStorage() {
  localStorage.removeItem('user');
}

function getUserFromLocalStorage() {
  return JSON.parse(localStorage.getItem('user'))
}

export {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
};
