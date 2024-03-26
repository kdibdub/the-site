import Matrix from "../components/matrix";

const ProjectsPage = () => {
  return (
    <>
      <div className="projects">
        <div className="projects-format">
          <div className="projects-title">
            <h1>These are my projects!</h1>
          </div>
          <div className="projects-values">
            <div className="project">
              <img
                src="/logo-no-background.png"
                className="dinner-logo"
                alt=""
              />
              <a href="https://github.com/cs428TAs/w2024/wiki/Dinner-Date">
                Dinner Date
              </a>
            </div>
            <div className="project">
              <img src="/better_coin.gif" className="coin-logo" alt="" />
              <a href="https://github.com/cs428TAs/w2024/wiki/Dinner-Date">
                This website!
              </a>
            </div>
          </div>
        </div>
      </div>
      <Matrix />
    </>
  );
};

export default ProjectsPage;
