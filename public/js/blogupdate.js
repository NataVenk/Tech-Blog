// update blog 

const updateBlog = async(event) => {
   event.preventDefault();

   const blog_topic = document.querySelector('#blog-topic').value.trim();
   const blog_body = document.querySelector('#blog-body').value.trim();
   const blog_id = document.querySelector("#blog-com").value.trim();
  
   if (blog_topic && blog_body) {
 
     const response = await fetch(`/api/blogs/${blog_id}`, {
       method: 'PUT',
       body: JSON.stringify({ blog_topic, blog_body, blog_id}),
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
/// delete blog chosen
 const delBlog = async (event) => {
  // if (event.target.hasAttribute('blog-id')) {
  //   const id = event.target.getAttribute('blog-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
;

  document.querySelector("#blogUpdate").addEventListener("click", updateBlog);
  document.querySelector("#blogDelete").addEventListener("click", delBlog);