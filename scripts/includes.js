document.addEventListener('DOMContentLoaded', function () {
    // Load the header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header_placeholder').innerHTML = data;
            setActiveLink(); // Call the function to set active link after loading header
        });

    // Load the footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer_placeholder').innerHTML = data;
        });

    fetch('consultation_button.html')
        .then(response => response.text())
        .then(data => {
            const placeholders = document.querySelectorAll('.consultation_placeholder');
            placeholders.forEach(placeholder => {
                placeholder.innerHTML = data;
            });
        })
        .catch(error => console.error('Error fetching the HTML:', error));

});

function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    console.log(navLinks)

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Ensure the link paths are compared accurately
        if ((linkPath === '/' && currentPath === '/') ||
            (linkPath !== '/' && currentPath.includes(linkPath))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function handleMenuToggle() {
    console.log('menu toggle');
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');

}

document.addEventListener('DOMContentLoaded', function () {
    var tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default action

            // Remove tooltip-active class from all tooltips except the clicked one
            tooltips.forEach(function (tip) {
                if (tip !== tooltip) {
                    tip.classList.remove('tooltip-active');
                }
            });

            // Toggle tooltip-active class on the clicked tooltip
            tooltip.classList.toggle('tooltip-active');
        });

        // Close the tooltip if clicked outside
        document.addEventListener('click', function (e) {
            if (!tooltip.contains(e.target)) {
                tooltip.classList.remove('tooltip-active');
            }
        });
    });
});


