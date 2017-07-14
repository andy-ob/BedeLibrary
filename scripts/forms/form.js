/**
 * Handle form submissions
**/
import serialize from './form-serialize';
  
class Form {
  constructor(element) {
    this.element = element;

    serialize(this.element)

    if (this.element) {
      this.setup();
      this.listen();
    }
  }

  setup() {
    this.submitBtn = this.element.querySelector('[data-submit]');
  }

  listen() {
    this.submitBtn.addEventListener('click', e => {
      e.preventDefault();

      this.submitBtn.disabled = true;
      this.submitBtn.classList.add('loading');
      
      this.submit();
    });
  }

  getUrl() {
    return this.element.action;
  }

  getMethod() {
    return this.element.method.toUpperCase();
  }

  getHeaders() {
    return new Headers({ 'Content-Type': 'application/json' });
  }

  getBody() {
    return JSON.stringify(serialize(this.element));
  }

  submit() {
    fetch(this.getUrl(), {
      method: this.getMethod(),
      headers: this.getHeaders(),
      body: this.getBody()
    })
    .then(res => this.successHandler())
    .catch(err => this.errorHandler(err));
  }

  successHandler() {
    this.submitBtn.disabled = false;
    this.submitBtn.classList.remove('loading');
  }

  errorHandler() {
    // handle errors
  }
}

export default Form;
