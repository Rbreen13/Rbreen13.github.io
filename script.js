// script.js

function showContent(id, clickedDiv) {
    // Hide all content divs
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        content.style.display = 'none';


    });

    // Show the selected content div
    document.getElementById(id).style.display = 'flex';

    // Remove 'active' class from all divs with class 'work'
    var divs = document.querySelectorAll('.dev');
    divs.forEach(function (div) {
        div.classList.remove('active');
    });

    // Add 'active' class to the clicked div
    clickedDiv.classList.add('active');
}

