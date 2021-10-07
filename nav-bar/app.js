// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }
    else{
        links.classList.add("show-links");
    }
    // toggle - toggles class -- one liner for instead of the above
    // how it looks:
    //links.classList.toggle("show-links");
})
