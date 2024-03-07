function toggleSearch() {
    var searchBar = document.getElementById('searchInput');
    searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'inline-block' : 'none';
    if (searchBar.style.display === 'inline-block') {
        searchBar.focus();
    }
}

function toggleMenu() {
    var navbarCollapse = document.getElementById('navbarCollapse');
    navbarCollapse.classList.toggle('show');
  }