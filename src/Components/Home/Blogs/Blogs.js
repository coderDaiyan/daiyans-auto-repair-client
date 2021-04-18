import React from "react";
import BlogsCard from "../BlogsCard/BlogsCard";

const Blogs = () => {
  const blogData = [
    {
      name: "Rashed Kabir",
      date: "22 Aug 2018",
      title: "Lorem ipsum dolor sit amet consectetur a",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit laudantium unde molestias quaerat neque quidem. Velit possimus mollitia magni.",
    },
    {
      name: "Rashed Kabir",
      date: "23 April 2019",
      title: "Lorem ipsum dolor sit amet consectetur a",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit laudantium unde molestias quaerat neque quidem. Velit possimus mollitia magni.",
    },
    {
      name: "Rashed Kabir",
      date: "22 Aug 2018",
      title: "Lorem ipsum dolor sit amet consectetur a",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit laudantium unde molestias quaerat neque quidem. Velit possimus mollitia magni.",
    },
  ];
  return (
    <section data-aos="zoom-out" className="blogs__section">
      <div className="text-center">
        <h5 style={{ color: "var(--text-color-green)" }}>OUR BLOG</h5>
        <h2 className="fw-bold" style={{ color: "var(--text-color-dark)" }}>
          From Our Blog News
        </h2>
      </div>
      <div className="row parent d-flex justify-content-center align-items-center">
        {blogData.map((blog) => (
          <BlogsCard blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
