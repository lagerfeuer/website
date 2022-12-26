import Link from "next/link"

function MyLink({href, children}) {
  return (
    <Link className="text-blue-500 font-bold" href={href} target="_blank">{children}</Link>
  );
}

export default MyLink