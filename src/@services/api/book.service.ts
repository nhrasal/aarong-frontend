import { apiIns } from '@config/api.config';

export const BookService = {
  getAll: () => apiIns.get('books'),
  save: (payload) => apiIns.post('books', payload)
};
