function addUserToLocalStorage(user) {
  localStorage.setItem('user', user);
}

function removeUserFromLocalStorage() {
  localStorage.removeItem('user');
}

function getUserFromLocalStorage() {
  return localStorage.getItem('user')
}

export {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
};
