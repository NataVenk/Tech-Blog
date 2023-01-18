const newBlog = async (event) => {

    event.preventDefault();
 
    const blog_topic = document.querySelector('#blog-topic').value.trim();
    const blog_body = document.querySelector('#blog-body').value.trim();
    
    if (blog_topic && blog_body) {
  
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ blog_topic, blog_body }),
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