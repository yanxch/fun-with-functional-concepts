import {State} from '../reducers';

export const selectUser = (state: State) => state.selectedUser;
export const selectAllBooks = (state: State) => state.allBooks;

