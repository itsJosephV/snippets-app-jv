import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-2">
        <p className="w-fit bg-violet-100 px-2">This is the homePage</p>
        <Link className="w-fit bg-violet-100 px-2" href="/dashboard">
          Go to snippets dashboard
        </Link>
        <Link className="w-fit bg-violet-100 px-2" href="/auth/login">
          sign in
        </Link>
        <Link className="w-fit bg-violet-100 px-2" href="/auth/register">
          register
        </Link>
      </div>
    </div>
  );
}
