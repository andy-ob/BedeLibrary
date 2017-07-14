/**
 * Factory for Constructors
**/

class Factory {
  static attach(Constructor, selector) {
    const elements = document.querySelectorAll(selector);

    if (elements.length) {
      for (const element of elements) {
        new Constructor(element);
      }      
    }
  }
}

export default Factory;
