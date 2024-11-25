import Card from "@/components/Card";
import Friends from "@/public/icons/Friends.js";
import Home from "@/public/icons/Home.js";
import Notifications from "@/public/icons/Notifications.js";
import SavedPosts from "@/public/icons/SavedPosts.js";
import Logout from "@/public/icons/Logout.js";
import { useRouter } from "next/router";
import Link from "next/link";

const Navigation = () => {
  const router = useRouter();
  const { pathname } = router;

  const activeElement =
    "flex gap-2 py-3 bg-blue-500 rounded-2xl text-white -mx-4 px-8";
  const nonActiveElement =
    "flex gap-2 py-3 transition ease-in-out hover:bg-blue-200 -mx-2 px-6 rounded-2xl";

  return (
    <Card>
      <div className="px-4 py-2 flex flex-col gap-2">
        <h2 className="text-gray-300 mb-4">Navigation</h2>
        <Link
          href="/"
          className={pathname === "/" ? activeElement : nonActiveElement}
        >
          <Home className="w-6"></Home> Home
        </Link>
        <Link
          href="/friends"
          className={pathname === "/friends" ? activeElement : nonActiveElement}
        >
          <Friends className="w-6"></Friends> Friends
        </Link>
        <Link
          href="/notifications"
          className={
            pathname === "/notifications" ? activeElement : nonActiveElement
          }
        >
          <Notifications className="w-6"></Notifications> Notifications
        </Link>
        <Link
          href="/saved-posts"
          className={
            pathname === "/saved-posts" ? activeElement : nonActiveElement
          }
        >
          <SavedPosts className="w-6"></SavedPosts> Saved Posts
        </Link>
        <a href="" className={nonActiveElement}>
          <Logout className="w-6"></Logout> Logout
        </a>
      </div>
    </Card>
  );
};

export default Navigation;
