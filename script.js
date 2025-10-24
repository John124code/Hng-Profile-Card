// ============================================
// STAGE 0: Update time in milliseconds
// ============================================
function updateTime() {
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Initialize time on page load
if (document.getElementById('time')) {
    updateTime();
    setInterval(updateTime, 1000);
}

// ============================================
// STAGE 1: Contact Form Validation
// ============================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    // Only run if we're on the contact page
    if (!contactForm) {
        console.log('Contact form not found on this page');
        return;
    }

    console.log('Contact form initialized');

    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Validation functions
    function validateName() {
        const name = nameInput.value.trim();
        console.log('Validating name:', name);
        
        if (name === '') {
            nameError.textContent = 'Full name is required';
            nameInput.setAttribute('aria-invalid', 'true');
            return false;
        }
        
        nameError.textContent = '';
        nameInput.setAttribute('aria-invalid', 'false');
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log('Validating email:', email);
        
        if (email === '') {
            emailError.textContent = 'Email is required';
            emailInput.setAttribute('aria-invalid', 'true');
            return false;
        }
        
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email (e.g., name@example.com)';
            emailInput.setAttribute('aria-invalid', 'true');
            return false;
        }
        
        emailError.textContent = '';
        emailInput.setAttribute('aria-invalid', 'false');
        return true;
    }

    function validateSubject() {
        const subject = subjectInput.value.trim();
        console.log('Validating subject:', subject);
        
        if (subject === '') {
            subjectError.textContent = 'Subject is required';
            subjectInput.setAttribute('aria-invalid', 'true');
            return false;
        }
        
        subjectError.textContent = '';
        subjectInput.setAttribute('aria-invalid', 'false');
        return true;
    }

    function validateMessage() {
        const message = messageInput.value.trim();
        console.log('Validating message:', message, 'Length:', message.length);
        
        if (message === '') {
            messageError.textContent = 'Message is required';
            messageInput.setAttribute('aria-invalid', 'true');
            return false;
        }
        
        if (message.length < 10) {
            messageError.textContent = `Message must be at least 10 characters (current: ${message.length})`;
            messageInput.setAttribute('aria-invalid', 'true');
            return false;
        }
        
        messageError.textContent = '';
        messageInput.setAttribute('aria-invalid', 'false');
        return true;
    }

    // Add event listeners for real-time validation
    nameInput.addEventListener('blur', function() {
        console.log('Name blur event');
        validateName();
    });

    emailInput.addEventListener('blur', function() {
        console.log('Email blur event');
        validateEmail();
    });

    subjectInput.addEventListener('blur', function() {
        console.log('Subject blur event');
        validateSubject();
    });

    messageInput.addEventListener('blur', function() {
        console.log('Message blur event');
        validateMessage();
    });

    // Optional: Clear errors when user starts typing
    nameInput.addEventListener('input', function() {
        if (nameError.textContent) {
            validateName();
        }
    });

    emailInput.addEventListener('input', function() {
        if (emailError.textContent) {
            validateEmail();
        }
    });

    subjectInput.addEventListener('input', function() {
        if (subjectError.textContent) {
            validateSubject();
        }
    });

    messageInput.addEventListener('input', function() {
        if (messageError.textContent) {
            validateMessage();
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');

        // Hide success message if visible
        successMessage.style.display = 'none';

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        console.log('Validation results:', {
            name: isNameValid,
            email: isEmailValid,
            subject: isSubjectValid,
            message: isMessageValid
        });

        // Check if all fields are valid
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            console.log('Form is valid! Showing success message');
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset form
            contactForm.reset();

            // Clear any lingering error states
            [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
                input.setAttribute('aria-invalid', 'false');
            });

            // Clear all error messages
            [nameError, emailError, subjectError, messageError].forEach(error => {
                error.textContent = '';
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            console.log('Form has errors');
            // Focus on first invalid field
            if (!isNameValid) nameInput.focus();
            else if (!isEmailValid) emailInput.focus();
            else if (!isSubjectValid) subjectInput.focus();
            else if (!isMessageValid) messageInput.focus();
        }
    });

    console.log('Contact form setup complete');
}