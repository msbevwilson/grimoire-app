const API_URL = 'http://localhost:3000';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  BOOKS: `${API_URL}/api/books`,
  BEST_RATED: `${API_URL}/api/books/bestrating`,
};

export const APP_ROUTES = {
  SIGN_UP: '/Registration',
  SIGN_IN: '/Connection',
  ADD_BOOK: '/Add',
  BOOK: '/book/:id',
  UPDATE_BOOK: 'book/modifier/:id',
};
