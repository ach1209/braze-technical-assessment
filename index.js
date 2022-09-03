/**
 * Accordion controls
 */

const toggles = document.querySelectorAll('.accordion-toggle')
toggles.forEach(btn => btn.addEventListener('click', toggleContent))

function toggleContent() {
  const accTabs = document.querySelectorAll('.accordion-tab')

  // Remove existing active classes from all tabs
  for (const accTab of accTabs) {
    accTab.classList.remove('accordion-tab-active')
  }

  // Add an active class to the targeted tab
  // this refers to <a class="accordion-toggle" ...>
  this.parentNode.classList.add('accordion-tab-active')

  const accContent = document.querySelectorAll('.accordion-content')

  // Switch to the content that matches the custom data-attribute
  accContent.forEach(data => {
    if (data.dataset.usecaseIndex === this.attributes.rel.value) {
      data.classList.remove('accordion-content-inactive')
    } else {
      data.classList.add('accordion-content-inactive')
    }
  })
}
