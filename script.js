// Update time in milliseconds
function updateTime() {
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Initialize time on page load
updateTime();

// Optional: Update time every second (remove if you only want initial time)
setInterval(updateTime, 1000);

// ============================================
// STAGE 1: Contact Form Validation
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    // Only run if we're on the contact page
    if (!contactForm) return;

    // Get form elements
    const nameInput = document.querySelector('[data-testid="test-contact-name"]');
    const emailInput = document.querySelector('[data-testid="test-contact-email"]');
    const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
    const messageInput = document.querySelector('[data-testid="test-contact-message"]');
    const successMessage = document.querySelector('[data-testid="test-contact-success"]');
     // Get error message elements
    const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
    const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
    const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');
    const messageError = document.querySelector('[data-testid="test-contact-error-message"]');
     // Validation functions
    function validateName() {
        const name = nameInput.value.trim();
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
        if (message === '') {
            messageError.textContent = 'Message is required';
            messageInput.setAttribute('aria-invalid', 'true');
            return false;
        }
        
        if (message.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            messageInput.setAttribute('aria-invalid', 'true');
            return false;
        }
        
        messageError.textContent = '';
        messageInput.setAttribute('aria-invalid', 'false');
        return true;
    }
    // Real-time validation on input
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Hide success message if visible
        successMessage.style.display = 'none';

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        // Check if all fields are valid
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
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

            // Optional: Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            // Focus on first invalid field
            if (!isNameValid) nameInput.focus();
            else if (!isEmailValid) emailInput.focus();
            else if (!isSubjectValid) subjectInput.focus();
            else if (!isMessageValid) messageInput.focus();
        }
    });
});