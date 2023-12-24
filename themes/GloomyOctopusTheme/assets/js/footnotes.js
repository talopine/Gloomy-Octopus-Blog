// from https://danielpost.com/articles/making-hugos-footnotes-accessible/

const footnotes = document.querySelector('.footnotes');

// Only run this code if there are footnotes on the page.
if (footnotes) {
  /**
   * Set attribute value for given selector.
   *
   * @param {String} selector - Selector to set attribute for.
   * @param {String} attribute - Attribute to set.
   * @param {String} value - Value for the attribute.
   */

  // Creates a heading for the list of footnotes
  const title = 'Footnotes';
  const id = 'footnotes-label';
  // Create an <h2> element and add it to the beginning of the .footnotes element.
  const element = document.createElement('h2');  // element = a h2 that's created
  const text = document.createTextNode(title); // text = text created from $title (which is "Footnotes")

  element.appendChild(text);  // adds $text to $element (aka the h2)
  element.classList.add('u-hidden-visually'); // add "u-hidden-visually" to the class list for the h2
  element.id = id; // sets the "id" of the h2 as "footnotes-label"

  footnotes.insertBefore(element, footnotes.firstChild); // add h2 element before the first footnote

  // creates a function that should set an attribute's value
  const setAttributeValue = ({ selector, attribute, value }) => {
    if (!selector || !attribute || !value) {     // if at least one of these is not true (doesn't exist??) - stop function
      return;
    }

    const items = document.querySelectorAll(selector); //sets $items as all $selector in the document

    if (!items.length) { // if no items of the particular selector in the document, stop function
      return;
    }

    for (const item of items) {
      item.setAttribute(attribute, value);
    }
  };

  // Use the footnotes title to describe each reference.
  // talopine: changed to the class selectors in hugo/bulma
  setAttributeValue({
    selector: '.footnote-ref',
    attribute: 'aria-describedby',
    value: id
  });

  // Add a 'Back to content' label to each back-to-content link.
  // talopine: changed to the class selectors in hugo/bulma
  setAttributeValue({
    selector: 'sup',
    attribute: 'class',
    value: 'footnote-ref-target'
  });
}
