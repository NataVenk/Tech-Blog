const newComment = async (event) => {
  event.preventDefault();
  console.log("submitting comment");

  const blog_comment = document.querySelector("#blog-com").value.trim();
  const blog_id = document.querySelector("#blog-com").dataset.id;
  console.log(blog_id);
  if (blog_comment) {
    console.log("again");
    const response = await fetch(`/api/blogs/${blog_id}`, {
      method: "POST",
      body: JSON.stringify({ blog_comment }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(blog_comment);
    if (response.ok) {
      // If successful, redirect the browser to dashboard
      document.location.replace('/blogcomment');
    } else {
      alert("Failed to post.");
    }
  }
};

document.querySelector("#commentSub").addEventListener("click", newComment);
