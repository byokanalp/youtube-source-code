var getItemOffset = function(item) {
    return item.offsetTop;
}

var moveMarker = function(offset) {
    var marker = document.querySelector('.active-marker');
    marker.style.transform = 'translateY(' + offset + 'px)';
}

var toggleActive = function(e) {
    e.preventDefault();

    var links = document.querySelectorAll('.vertical-menu-item');
    links.forEach((link => link.classList.remove('is-active')));

    var activeItem = e.target.parentElement
    activeItem.classList.toggle('is-active');
    var offset = getItemOffset(activeItem);
    moveMarker(offset);
}

var menu = document.querySelector('.vertical-menu');

menu.addEventListener('click', toggleActive);