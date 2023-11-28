export default function ProjectPage({ project, setPage, hasSubdirectory }) {
  let projectLinks = <></>;
  if (project.links != undefined) {
    projectLinks = project.links.map((link) => (
      <div key={link.name}>
        <br />
        <a
          className="text-blue-500 underline font-scp text-2xl"
          href={link.ref}
          rel="noreferrer"
          target="_blank"
        >
          {link.name}
        </a>
      </div>
    ));
  }

  return (
    <div className="ze:px-8 md:px-[100px]">
      <div className="md:w-[50%] md:float-left md:pr-8 pb-10">
        <button
          type="button"
          className="border-black border-2 p-1 px-2 text-2xl rounded hover:bg-gray-200 transition-colors font-scp"
          onClick={
            hasSubdirectory
              ? () => (location.href = "https://rafael.directory")
              : () => setPage("home")
          }
        >{`< Back`}</button>
        <br />
        <br />
        <h1 className="text-4xl md:text-5xl font-scp">{project.title}</h1>
        <h2 className="tracking-widest text-2xl title-font font-medium text-blue-500 mb-1m font-scp">
          {project.category}
        </h2>
        <img
          src={project.image}
          alt="gallery"
          className="md:hidden max-w-[100%] py-4"
        />
        <p className="font-scp whitespace-pre-line md:pt-8">{project.long}</p>
        {projectLinks}
      </div>
      <div className="ze:hidden md:block md:w-[50%] md:float-left md:pl-8">
        <img
          src={project.image}
          alt="gallery"
          className="max-w-[100%]"
        />
      </div>
    </div>
  );
}
