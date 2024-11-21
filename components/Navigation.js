import Card from "@/components/Card";
import Friends from "@/public/Friends.js";
import Home from "@/public/Home.js";
import Notifications from "@/public/Notifications.js";
import SavedPosts from "@/public/SavedPosts.js";
import Logout from "@/public/Logout.js";
import Image from "next/image";

const Navigation = () => {

  const activeElement = "flex gap-2 py-3 bg-blue-500 rounded-2xl text-white -mx-8 px-8";
  const nonActiveElement = "flex gap-2 py-3 transition ease-in-out hover:bg-blue-200 -mx-6 px-6 rounded-2xl";

  return (
    <Card>
      <div className="px-4 py-2 flex flex-col gap-2">
        <h2 className="text-gray-300 mb-4">Navigation</h2>
        <a href="" className={activeElement}>
          <Home className="w-6"></Home> Home
        </a>
        <a href="" className={nonActiveElement}>
          <Friends className="w-6"></Friends> Friends
        </a>
        <a href="" className={nonActiveElement}>
          <Notifications className="w-6"></Notifications> Notifications
        </a>
        <a href="" className={nonActiveElement}>
          <SavedPosts className="w-6"></SavedPosts> Saved Posts
        </a>
        <a href="" className={nonActiveElement}>
          <Logout className="w-6"></Logout> Logout
        </a>
      </div>
    </Card>
  );
};

export default Navigation;
