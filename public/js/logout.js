const logout = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert(response.statusText);
    }
  };

  document.querySelector('#logoutBtn').addEventListener('click', logout);