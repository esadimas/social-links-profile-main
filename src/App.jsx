function App() {
  const listTtem = [
    {
      label: "Github",
      link: "https://github.com/",
    },
    {
      label: "Frontend Mentor",
      link: "https://frontendmentor.io/",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/",
    },
  ];

  return (
    <div className="container">
      <section className="card-container">
        {/* section 1 */}
        <div className="card">
          <div className="card-header">
            <img
              className="image-profile"
              src="/avatar-jessica.jpeg"
              alt="avatar-jessica"
            />
            <div className="card-info">
              <h2>Jessica Randall</h2>
              <p className="location">London, United Kingdom</p>
            </div>
          </div>
          <p className="quote">“Front-end developer and avid reader”.</p>
        </div>

        <div className="lists">
          {listTtem.map((list, index) => (
            <a href={list.link} className="item" key={index}>
              {" "}
              {list.label}{" "}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
