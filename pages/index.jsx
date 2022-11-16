import Link from "next/link";

function HomePage() {
  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
          <div className="grid md:grid-cols-1 gap-x-6 lg:gap-x-12">
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  className="rounded-full shadow-lg w-64"
                />
              </div>
              <h1 className="text-3xl font-bold mb-8">Hi, I'm Lukas</h1>
              <h5 className="text-xl font-bold mb-4">
                I am a DevOps Engineer at{" "}
                <Link href="https://www.roomstogo.com" target="_blank">
                  RoomsToGo
                </Link>
              </h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
