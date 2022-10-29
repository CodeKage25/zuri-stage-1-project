import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <section className="main__section">
        <div className="content">
          <section className="profile__section">
            <div className="profile__img" />

            <div className="twitter">
              <h5 className="text">Annette Black</h5>
            </div>

            <div className="avatar__share-button">
              <div className="content__button">
                <div className="share">
                  <img
                    src="./asset/images/icon.png"
                    alt="logo"
                    className="icon"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="link__section">
            <div className="links">
              <div className="link__text">
                <a href="/">Twitter Link</a>
              </div>
            </div>
            <div className="links">
              <div className="link__text">
                <a href="https://training.zuri.team/">Zuri Team</a>
              </div>
            </div>
            <div className="links">
              <div className="link__text">
                <a href="https://books.zuri.team/">Zuri books</a>
              </div>
            </div>
            <div className="links">
              <div className="link__text">
                {/* <a href='/'><span>Python </span>&nbsp;<span>Books</span></a> */}
                <a href="http://books.zuri.team ">Python Books</a>
              </div>
            </div>
            <div className="links">
              <div className="link__text">
                {/* <a href='/'> <span>Background </span>&nbsp;<span> Check</span>&nbsp; <span>for</span>&nbsp; <span>Coders</span></a> */}
                <a href="https://background.zuri.team">
                  {" "}
                  Background Check for Coders
                </a>
              </div>
            </div>
            <div className="links">
              <div className="link__text">
                {/* <a href='/'><span>Design </span>&nbsp;<span>Books</span></a> */}
                <a href="https://books.zuri.team/design-rules"> Design Books</a>
              </div>
            </div>
          </section>
        </div>
        <section className="social__link">
          <div className="container">
            <div className="link__content">
              <div className="social__icon">
                <div className="slack"><img src="./asset/images/slack.png" alt="slack-logo"/></div>
                <div className="git"><img src="./asset/images/git.jpg" alt="github-logo"/></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
