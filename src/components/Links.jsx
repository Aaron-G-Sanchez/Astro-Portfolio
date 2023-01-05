const Links = () => {
  return (
    <>
      <nav className="links-bar">
        <div className="connect-wrapper">
          <a className="email-link" href="mailto:saarong12@gmail.com">
            <p>Let's Connect!</p>
          </a>
        </div>
        <div className="button-container">
          <a
            href="https://www.linkedin.com/in/aaron-g-sanchez/"
            target="_blank"
          >
            <img
              className="social-icon"
              src="/assets/images/linkedin.png"
              alt="linkedin-logo"
            />
          </a>
        </div>

        <div className="button-container">
          <a href="https://github.com/Aaron-G-Sanchez" target="_blank">
            <img
              className="social-icon"
              src="/assets/images/github.png"
              alt="github-logo"
            />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Links
