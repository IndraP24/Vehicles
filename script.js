document.addEventListener('DOMContentLoaded', function() {
    // Initialize the sidenav
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  
    // Initialize the dropdown menu
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {coverTrigger: false};
    var instances = M.Dropdown.init(elems, options);
  
    // Initialize the modal
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
  