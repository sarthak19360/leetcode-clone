import { Header } from "../components/Header";

import icon from "../assets/Images/leetcode-icon.webp";
export function Home(params) {
  const blogs = [
    {
      title: "Why C++?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt eius atque repellendus a, suscipit nam amet ullam aut illo.",
    },
    {
      title: "Is Java more better?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt eius atque repellendus a, suscipit nam amet ullam aut illo.",
    },
    {
      title: "I learned machine learning through neetcode",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt eius atque repellendus a, suscipit nam amet ullam aut illo.",
    },
    {
      title: "10 reasons why you should stop using CSS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt eius atque repellendus a, suscipit nam amet ullam aut illo.",
    },
    {
      title: "MongoDb or PostGresSQL",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt eius atque repellendus a, suscipit nam amet ullam aut illo.",
    },
  ];
  return (
    <>
      <Header icon={icon} />
      <div className="blogs">
        {blogs &&
          blogs.map((blog) => {
            return (
              <div className="blog-item">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
