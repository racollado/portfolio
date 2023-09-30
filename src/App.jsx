import Folder from "./Folder";

function App() {
  const treeData = [
    {
      name: "Folder 1",
      files: ["File 1.1", "File 1.2", "File 1.3"],
    },
    {
      name: "Folder 2",
      files: ["File 2.1", "File 2.2"],
    },
  ];

  return (
    <>
      <div className="max-w-[90%] md:min-w-[40rem] md:w-[50rem] md:max-w-[calc(100%-5rem)]  m-auto my-8">
        <h1 className="text-center text-2xl md:text-6xl font-scp underline mb-8">
          rafael.directory
        </h1>
      </div>
      <div className="max-w-[90%] md:min-w-[40rem] md:w-[50rem] md:max-w-[calc(100%-5rem)] max-h-[78vh] m-auto bg-blue-200 border-4 border-black rounded min-h-[60vh]">
        <div className="w-[100%] h-10 p-2 leading-6 text-lg bg-red-200">
          <p>Home</p>
        </div>
        <div>
          {treeData.map((folder, index) => (
            <Folder key={index} name={folder.name} files={folder.files} />
          ))}
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-center text-xl font-scp mb-8">
          If you're seeing this website right now, it's a work in progress!
        </h2>
      </div>
    </>
  );
}

export default App;
