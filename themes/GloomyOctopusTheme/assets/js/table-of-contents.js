const tableOfContents = document.querySelector('.table-of-contents');

// Only run this code if there is a table of contents on the page.
if (tableOfContents) {

  document.getElementById("contentsButton").addEventListener("click", toggleTOC);
  document.getElementById("closeButton").addEventListener("click", toggleTOC);

  // close contents popup on clicking a link
  const list = document.getElementById("tableOfContentsBody");
  const items = list.getElementsByTagName("a");
  for (const item of items) {
    item.addEventListener("click", toggleTOC);
  }

  function toggleTOC(){ 
    var $body = document.getElementById("tableOfContentsBody");
    let value = $body.style.display;
    if (value == 'block') {
      $body.style.setProperty('display', 'none');
    } else {
      $body.style.setProperty('display', 'block');
    };
  };

  // highlight active section in ToC
  // adapted from https://iamsorush.com/posts/table-of-content-blog/
	window.addEventListener('DOMContentLoaded', () => {
		const observerForTableOfContentActiveState = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				const id = entry.target.getAttribute('id');

				if (entry.intersectionRatio > 0) {					
					clearActiveStatesInTableOfContents();				
					document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
				}
			});
		});		
		document.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]').forEach((section) => {
			observerForTableOfContentActiveState.observe(section);
		});

	});

	function clearActiveStatesInTableOfContents() {
		document.querySelectorAll('nav li').forEach((section) => {
			section.classList.remove('active');
		});
	}

}
