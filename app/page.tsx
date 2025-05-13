import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1 className="text-4xl">Home Page</h1>
      <Link href="/about" className="text-xl text-blue-700 inline-block mt-8">
        About Page
      </Link>
    </>
  );
};
export default HomePage;
