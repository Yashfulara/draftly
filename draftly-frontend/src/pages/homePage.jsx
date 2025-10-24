import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-neutral-800 text-white min-h-screen">
      <div className="container mx-auto px-2">
        <div className="min-h-screen flex justify-center items-center">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-xl mb-6">
              Draftly- Your Ideas,
              <span className="text-blue-400">Perfectly Drafted.</span>
            </h1>
            <p className="max-w-xl text-lg mb-8">
              Where creativity meets clarity. Turn thoughts into beautifully
              written stories, articles, or journals — all in one clean,
              distraction-free space. Whether you're a seasoned writer or just
              starting out, Draftly helps you stay inspired, stay organized, and
              share your voice with the world.Start writing smarter. Start
              writing with Draftly.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                className="bg-blue-400 py-2 px-4 rounded-full text-lg hover:cursor-pointer"
                onClick={() => navigate("/blogs/create")}
              >
                Start Writing
              </button>
              <button
                className="bg-white py-2 px-4 rounded-full text-lg text-black hover:cursor-pointer"
                onClick={() => navigate("/blogs")}
              >
                Explore Blogs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
