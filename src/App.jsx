import { useState } from "react";
import Projects from "./Projects";
import ProjectPage from "./ProjectPage";

function App({ hasSubdirectory, projectData }) {
  const [page, setPage] = useState(hasSubdirectory ? "project" : "home");
  const [project, setProject] = useState(projectData);

  let mainContent = <Projects {...{ setPage, setProject }} />;
  if (page == "project") {
    mainContent = <ProjectPage {...{ setPage, project, hasSubdirectory }} />;
  }

  return (
    <>
      <div className="max-w-[90%] md:min-w-[40rem] md:w-[50rem] md:max-w-[calc(100%-5rem)]  m-auto mt-8 mb-6">
        <a href="/">
          <h1 className="text-center text-4xl md:text-6xl font-scp underline mb-8">
            rafael.directory
          </h1>
        </a>
        <h2 className="text-center font-scp">A work in progress!</h2>
      </div>
      {mainContent}
    </>
  );
}

export default App;
