import Link from "next/link";

function page() {
  return (
    <div className="bg-base-100 min-h-screen flex flex-col justify-between">
      <div className="navbar bg-base-300">
        <button className="btn btn-ghost text-xl">
          <h1 className="text-primary text-xl md:text-2xl font-bold">
            MLH API Global Hack Week Projects
          </h1>
        </button>
      </div>

      <div className="container mx-auto my-8 px-4 md:px-10 lg:px-20 text-base-content">
        <img src="images/cover.jpg" alt="cover" />

        <div className="mt-8">
          <p className="text-xl font-medium">
            Welcome to the{" "}
            <span className="text-primary">MLH API Global Hack Week</span>{" "}
            Projects repository!
          </p>
          <p className="mt-4 text-lg">
            This repository contains projects developed during the MLH API
            Global Hack Week by me (K Om Senapati).
          </p>
        </div>

        {/* Project List */}
        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary">Featured Projects</h2>
          <div className="mt-4 flex gap-10">
            <Link href="/food-suggestor">
              <button className="btn btn-ghost text-2xl">Food Suggestor</button>
            </Link>
            <Link href="/pokedox">
              <button className="btn btn-ghost text-2xl">Pokedox</button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="p-4 bg-base-300 text-base-content">
        <div className="container mx-auto">
          <p className="text-center">&copy; 2024 MLH API Global Hack Week</p>
        </div>
      </footer>
    </div>
  );
}
export default page;
