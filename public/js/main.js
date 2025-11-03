document.addEventListener('DOMContentLoaded', function () {
    fetch('/modules/navbar.html')
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            const $navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });

            var loginBtn = document.getElementById('loginBtn');
            var logoutBtn = document.getElementById('logoutBtn');

            fetch('/api/auth/me')
                .then(function (response) {
                    if (response.ok) {
                        loginBtn.style.display = 'none';
                        logoutBtn.style.display = '';
                    }
                });
        });
});
