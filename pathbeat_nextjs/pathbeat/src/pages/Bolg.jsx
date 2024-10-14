"use client";
import React, { useState, useEffect } from "react";

async function fetchPost() {
  const response = await fetch(
    "https://public-api.wordpress.com/rest/v1.1/sites/blogs.pathbeat.in/posts?fields=title,author,date,URL,excerpt,featured_image&number=9"
  );
  const data = await response.json();
  return data.posts;
}

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts client-side only
    fetchPost()
      .then((posts) => setPosts(posts))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Prevent rendering until data is fetched
  if (!posts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-5 min-h-screen lg:px-28" id="blog">
      <h1 className="text-center heading lg:text-4xl text-2xl font-semibold mt-16">
        Blog and Resources{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8">
        {posts.map((post) => (
          <a
            href={post.URL}
            key={post.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              key={post.URL}
              className="bg-white shadow-md hover:scale-95 ease-in-out duration-500 rounded-lg overflow-hidden"
            >
              <img
                src={post.featured_image}
                alt={post.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2
                  dangerouslySetInnerHTML={{ __html: post.title.slice(0, 200) }}
                  className="text-2xl heading font-bold mb-2"
                ></h2>
                <p className="text-sm text-gray-500 mb-4">
                  By {post.author.name} on{" "}
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <p
                  className="text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.slice(0, 200),
                  }}
                ></p>
                <p className="text-blue-500 btn hover:text-blue-700 font-bold">
                  Read More
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
