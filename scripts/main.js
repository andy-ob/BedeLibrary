/*
 * babel polyfill
*/
import 'babel-polyfill';

/*
 * Components
*/
import modalComponent from './modals/modals'

/*
 * Constructors
*/
import Factory from './factory/factory';
import Books from './books/displayBooks';
import AddBook from './books/addBook';

document.addEventListener('DOMContentLoaded', () => {
  modalComponent();
  Factory.attach(Books, '#book');
  Factory.attach(AddBook, '[data-id=add-book]');
});
