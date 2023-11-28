import projects from "./projects.json";

export default function Projects({ setPage, setProject }) {
  return (
    <div className="flex flex-wrap -m-4 px-10">
      {projects.map((project) => (
        <a key={project.title} className="min-w-[100%] sm:min-w-0 sm:w-1/2 lg:w-1/3 p-4">
          <div
            className="flex relative h-96 cursor-pointer"
            onClick={() => {
              setPage("project");
              setProject(project);
            }}
          >
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={project.image}
            />
            <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-800 bg-white opacity-0 hover:opacity-100 transition-all">
              <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1m font-scp">
                {project.category}
              </h2>
              <h1 className="text-2xl font-scp font-medium mb-3">
                {project.title}
              </h1>
              <p className="leading-relaxed font-scp">{project.short}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
