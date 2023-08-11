document.addEventListener('DOMContentLoaded', () => {
    const signupContainer = document.getElementById('signup-container');
    const successContainer = document.getElementById('success-container');
    const subscribeButton = document.getElementById('subscribe-button');
    const dismissButton = document.getElementById('dismiss-button');
    const emailInput = document.getElementById('email-address-box');
  
    successContainer.style.display = 'none';
  
    subscribeButton.addEventListener('click', (event) => {
      event.preventDefault();
      
      // Email validation
      const emailValue = emailInput.value;
      if (!validateEmail(emailValue)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      signupContainer.style.display = 'none';
      successContainer.style.display = 'block';
      successContainer.classList.add('popup'); 
    });
  
    dismissButton.addEventListener('click', () => {
      signupContainer.style.display = 'block';
      successContainer.style.display = 'none';
      successContainer.classList.remove('popup');
    });
  
    // Email validation function
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  