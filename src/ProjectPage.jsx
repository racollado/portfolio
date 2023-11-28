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
    <div className="px-[100px] pt-10">
      <table>
        <tbody>
          <tr className="align-top">
            <td className="pr-20">
              <button
                type="button"
                className="border-black border-2 p-1 px-2 text-2xl rounded hover:bg-gray-200 transition-colors font-scp"
                onClick={hasSubdirectory ? () => location.href = 'https://rafael.directory' : () => setPage("home")}
              >{`< Back`}</button>
              <br />
              <br />
              <h1 className="text-4xl md:text-5xl font-scp">{project.title}</h1>
              <h2 className="tracking-widest text-2xl title-font font-medium text-blue-500 mb-1m font-scp">
                {project.category}
              </h2>
              <br />
              <br />
              <p className="font-scp whitespace-pre-line">{project.long}</p>
              {projectLinks}
            </td>
            <td>
              <img
                src={project.image}
                alt="gallery"
                className="min-w-[500px] max-w-[700px]"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
