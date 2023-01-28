import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/imgs/profile.jpg";

function HomePage() {
  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-16 text-gray-800 text-center">
          <div className="grid md:grid-cols-1 gap-x-6 lg:gap-x-12">
            <div className="lg:mb-12">
              <div className="flex justify-center mb-6">
                <Image
                  src={profilePic}
                  alt="Profile picture"
                  className="rounded-full shadow-lg w-64"
                  placeholder="blur"
                  width={64}
                  height={64}
                />
              </div>
              <h1 className="text-3xl font-bold mb-4">Hi, I&apos;m Lukas</h1>
              <h5 className="font-body text-xl mb-4">
                <span>
                  DevOps Engineer @
                  <Link
                    href="https://www.roomstogo.com"
                    target="_blank"
                    className="ml-2 font-bold text-blue-500"
                  >
                    Rooms To Go
                  </Link>
                </span>
              </h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
