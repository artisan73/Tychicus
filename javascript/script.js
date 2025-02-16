const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('hidden');
            mobileMenuButton.innerHTML = isOpen ? '<span class="text-3xl">=</span>' : '<span class="text-3xl">×</span>';
        });

        document.addEventListener('click', (event) => {
            if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<span class="text-3xl">=</span>';
            }
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<span class="text-3xl">=</span>';
            });
        });
