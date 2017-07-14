/**
 * Serialize from data
**/

const serialize = form => {
  const data = {};

  for (const element of form.elements) {
    if (element.tagName.toLowerCase() !== 'fieldset' && element.name) {
      if (element.type === 'radio' && element.checked || element.type !== 'radio') {
        data[element.name] = element.value;
      }
    }
  }

  return data;
}

export default serialize;
