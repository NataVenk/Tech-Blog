const newBlog = async (event) => {

    event.preventDefault();
  
    const blogTopic = document.querySelector('#blog-topic').value.trim();
    const blogBody = document.querySelector('#blog-body').value.trim();
  
    if (blogTopic && blogBody) {
  
      const response = await fetch('/dashboard', {
        method: 'POST',
        body: JSON.stringify({ blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to updated blogs
        document.location.replace('/dashboard');
      } else {
        alert('Failed to post.');
      };
    };
  };
  
  
  document.querySelector(".new-blog").addEventListener("submit", newBlog)