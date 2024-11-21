import Card from "./Card";

import people from "@/public/People.svg";
import checkIn from "@/public/CheckIn.svg";
import mood from "@/public/Mood.svg";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <Card>
      <div className="flex gap-6">
        <Link className="w-12 rounded-full  overflow-hidden" href={'/profile'}>
          <img
            className=""
            src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Link>

        <textarea
          className="grow p-3"
          name="postarea"
          id=""
          placeholder="What's on your mind?"
        />
      </div>

      <div className="flex items-center gap-3 p-4 mt-2">
        <button className="flex gap-2">
          <Image src={people} /> People
        </button>
        <button className="flex gap-2">
          <Image src={checkIn} /> Check in
        </button>
        <button className="flex gap-2">
          <Image src={mood} /> Mood
        </button>
        <div className="grow text-right">
            <button className="py-1 bg-blue-500 rounded-2xl text-white text-lg font-bold px-6">
            Share
            </button>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
