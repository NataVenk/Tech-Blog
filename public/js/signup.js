const signupForm = async (event) => {

    event.preventDefault();
    console.log('Inside signupForm', "hello");
   
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    console.log(email);
    console.log(password);
  
    if (email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the user activity page
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      };
    };
  };
  
  document.querySelector(".signup-form").addEventListener("submit", signupForm)