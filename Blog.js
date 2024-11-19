import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  // Static blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Everyday Life",
      summary: "Explore how artificial intelligence is becoming part of our daily lives and the impact it will have.",
      content: "Artificial intelligence (AI) is rapidly becoming an essential part of everyday life..."
    },
    {
      id: 2,
      title: "Top 10 Tech Gadgets of 2024",
      summary: "A list of must-have tech gadgets this year, from smart home devices to the latest smartphones.",
      content: "The tech industry has been buzzing with innovations in 2024..."
    },
    {
      id: 3,
      title: "Understanding the Basics of Blockchain Technology",
      summary: "A beginner’s guide to blockchain and its applications beyond cryptocurrency.",
      content: "Blockchain technology is more than just the foundation of cryptocurrency..."
    },
    {
      id: 4,
      title: "How 5G Will Change Mobile Technology",
      summary: "An in-depth look at how 5G technology is set to revolutionize mobile connectivity.",
      content: "5G technology is the latest advancement in mobile networks..."
    },
    {
      id: 5,
      title: "Cybersecurity Tips for the Digital Age",
      summary: "Protect yourself online with these essential cybersecurity practices.",
      content: "In the digital age, protecting personal information online is more important than ever..."
    }
  ];

  // State to manage the selected blog post
  const [selectedBlog, setSelectedBlog] = useState(null);

  // State to manage search input
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered blog posts based on search query
  const filteredBlogs = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to select a blog post
  const openBlog = (id) => {
    const blog = blogPosts.find(post => post.id === id);
    setSelectedBlog(blog);
  };

  // Function to go back to blog list
  const closeBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog">
      <h1>News & Blog</h1>
      
      {selectedBlog ? (
        // Blog detail view
        <div className="blog-detail">
          <h2>{selectedBlog.title}</h2>
          <p>{selectedBlog.content}</p>
          <button onClick={closeBlog} className="back-button">Back to All Blogs</button>
        </div>
      ) : (
        // Blog list view with search functionality
        <div className="blog-list">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map(post => (
              <div key={post.id} className="blog-item" onClick={() => openBlog(post.id)}>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <button className="read-more">Read More</button>
              </div>
            ))
          ) : (
            <p>No blogs found matching your search.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
