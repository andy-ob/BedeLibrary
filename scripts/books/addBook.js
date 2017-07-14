/**
 * Add book
**/

import Form from '../forms/form';

class AddBook extends Form {
  listen() {
    super.listen();

    this.element.classList.add('loading');
  }
}

export default AddBook;
