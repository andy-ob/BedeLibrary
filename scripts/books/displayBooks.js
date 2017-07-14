/*
 * Get books from api and display using template
*/
import imageLoader from '../images/image-loader';

class Books {
  constructor(templateId) {
    this.template = templateId;

    if (this.template) {
      this.setup();
    }
  }

  setup() {
    this.opts = this.template.dataset;
    this.container = document.querySelector(`[data-id=${this.opts.container}]`);

    if (sessionStorage.getItem('books')) {
      this.displayBooks(JSON.parse(sessionStorage.getItem('books')));
    } else {
      this.getBooks();
    }
  }

  async getBooks() {
    const url = 'https://api.mlab.com/api/1/databases/bedelibrary/collections/books?apiKey=3TYf9F5FFOAF84bbLGtMNPpOiRpSq9oN';
    const response = await fetch(url);
    const data = await response.json();
    
    sessionStorage.setItem('books', JSON.stringify(data));

    this.displayBooks(data);
  }

  displayBooks(data) {
    const frag = document.createDocumentFragment();
    const template = this.template;
    const bookTemplate = template.content.querySelector('[data-id=book]');

    for (const book of data) {
      const item = bookTemplate.cloneNode(true);

      item.querySelector('[data-id=book-cover-img]').src = book.cover;

      frag.appendChild(item);
    }

    document.querySelector('[data-id=loader]').classList.add('hide');
    document.querySelector('[data-id=overlay]').classList.add('hide');

    this.container.appendChild(frag);

    /**
     * Image loader component to handle smooth transition of image loading
    **/
    imageLoader();
  }
}

export default Books;