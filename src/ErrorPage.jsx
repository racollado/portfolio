export default function ErrorPage() {
  return (
    <div className="max-w-[90%] md:min-w-[40rem] md:w-[50rem] md:max-w-[calc(100%-5rem)]  m-auto my-8">
      <a href="/">
        <h1 className="text-center text-4xl md:text-6xl font-scp underline mb-8">
          rafael.directory
        </h1>
      </a>
      <br />
      <h2 className="text-center text-xl">
        {"You seem to be lost! Let's get you back home."}
      </h2>
      <br/>
      <button
        type="button"
        className="border-black border-2 p-1 px-2 text-2xl rounded hover:bg-gray-200 transition-colors font-scp w-24 mx-[calc(50%-48px)] "
        onClick={() => (location.href = "https://rafael.directory")}
      >{`Home`}</button>
    </div>
  );
}
