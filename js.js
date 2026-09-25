/* Mobil Menu */
    const navicon = document.querySelector('.navicon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const logo = document.querySelector('.logo');

    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    };

    navicon.addEventListener('click', toggleMobileMenu);
    mobileMenu.addEventListener('click', toggleMobileMenu);
    logo.addEventListener('click', () => {
        if (mobileMenu.classList.contains('flex')) {
            toggleMobileMenu();
        }
    });