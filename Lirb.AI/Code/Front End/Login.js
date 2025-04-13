document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginTab.addEventListener('click', function() {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    signupTab.addEventListener('click', function() {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Form validation
    const signupFormElement = signupForm.querySelector('form');
    signupFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const username = document.getElementById('signup-username').value;
        const age = document.getElementById('signup-age').value;
        const profession = document.getElementById('signup-profession').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm').value;
        const terms = document.getElementById('terms').checked;

        if (!name || !email || !username || !age || !profession || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!terms) {
            alert('You must agree to the terms and conditions');
            return;
        }

        // In a real app, you would send this data to your server
        window.location.href = 'Dashboard.html';
        // window.location.href = 'dashboard.html';
    });

    // Login form submission
    const loginFormElement = loginForm.querySelector('form');
    loginFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

``
        window.location.href = 'dashboard.html';

        // window.location.href = 'dashboard.html';
    });

    // Profession dropdown enhancement
    const professionSelect = document.getElementById('signup-profession');
    professionSelect.addEventListener('change', function() {
        if (this.value === 'other') {
            const otherInput = document.createElement('input');
            otherInput.type = 'text';
            otherInput.placeholder = 'Please specify';
            otherInput.style.marginTop = '0.5rem';
            otherInput.style.width = '100%';
            otherInput.style.padding = '0.5rem';
            otherInput.style.border = '1px solid var(--divider)';
            otherInput.style.borderRadius = '4px';
            
            const existingOtherInput = this.parentNode.querySelector('.other-profession');
            if (!existingOtherInput) {
                this.parentNode.appendChild(otherInput);
                otherInput.classList.add('other-profession');
            }
        } else {
            const existingOtherInput = this.parentNode.querySelector('.other-profession');
            if (existingOtherInput) {
                existingOtherInput.remove();
            }
        }
    });
}); 