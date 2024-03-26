const tab1items = document.querySelectorAll('.tab-item');
const tabContentitems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectitem(e){
    // Remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to current tab item
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show')
}

// Remove bottom borders from all tab items
function removeBorder(){
    tab1items.forEach(item => {
        item.classList.remove('tab-border');
    });
}

// Remove show class from all content items
function removeShow() {
    tabContentitems.forEach(item => {
        item.classList.remove('show');
    });
}

// Listen for tab item click
tab1items.forEach(item => {
    item.addEventListener('click',selectitem);
});