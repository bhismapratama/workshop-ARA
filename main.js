function Navbar() {
    const navigation = document.querySelectorAll('.navbar')
    navigation.forEach(button => {
        button.addEventListener('click', function() {
            const activeButton = document.querySelector('.active-btn')
            const active = document.querySelector('.active')
            activeButton.classList.remove('active-btn')
            this.classList.add('active-btn');
            active.classList.remove('active')
            document.getElementById(button.dataset.id).classList.add('active');
        })
    });
}

Navbar();