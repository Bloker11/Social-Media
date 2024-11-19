import Card from "@/components/Card";
import friends from "@/public/Friends.svg";
import home from "@/public/Home.svg";
import notifications from "@/public/Notifications.svg";
import savedPosts from "@/public/SavedPosts.svg";
import logout from "@/public/Logout.svg";
import Image from "next/image";

const Navigation = () => {
  return (
    <Card>
      <h2 className="text-gray-300 mb-4">Navigation</h2>
      <a href="" className="flex gap-2 py-3">
        <Image className="w-1/10" src={home} alt="home" /> Home
      </a>
      <a href="" className="flex gap-2 py-3">
        <Image className="w-1/10" src={friends} alt="friends" /> Friends
      </a>
      <a href="" className="flex gap-2 py-3">
        <Image className="w-1/10" src={notifications} alt="notifications" />
        Notifications
      </a>
      <a href="" className="flex gap-2 py-3">
        <Image className="w-1/10" src={savedPosts} alt="savedPosts" />
        Saved Posts
      </a>
      <a href="" className="flex gap-2 py-3">
        <Image className="w-1/10" src={logout} alt="logout" />
        Logout
      </a>
    </Card>
  );
};

export default Navigation;
