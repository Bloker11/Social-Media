import Card from "./Card";
import heart from "@/public/Heart.svg";
import comment from "@/public/Comment.svg";
import share from "@/public/Share.svg";
import more from "@/public/More.svg";
import SavedPosts from "@/public/SavedPosts.js";
import hideEye from "@/public/HideEye.svg";
import report from "@/public/Report.svg";
import trashcan from "@/public/Trashcan.svg";
import turnNotification from "@/public/TurnNotification.svg";
import Image from "next/image";
import ClickOutHandler from "react-clickout-handler";
import { useState } from "react";
import Link from "next/link";

const ExistingPost = () => {

  const [dropDown,setDropDown] = useState(false)

  const hoverClass = "flex gap-2 py-3 transition ease-in-out hover:bg-blue-200 -mx-4 px-4 rounded-2xl";

  return (
    <Card>
      <div className="flex gap-2">
        <Link className="w-12 rounded-full  overflow-hidden" href={'/profile'}>
          <img
            className=""
            src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Link>
        <div className="flex gap-1 ml-4 flex-col">
          <div className="flex gap-1 mt-3">
            <Link className="font-bold" href={'/profile'}>John Doe</Link>
            <p>posted</p>
            <span className="text-blue-500 font-bold">album</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <div className="grow text-right">
          <button onClick={() => setDropDown(!dropDown)}>
            <Image src={more} />
          </button>
        </div>
        <ClickOutHandler onClickOut={() => {}}>
          <div className="relative">
            {dropDown && (
              <div className="absolute right-0 mt-4 bg-white shadow-md p-4  rounded-md flex flex-col gap-2 w-48">
                <a href="" className={hoverClass}>
                  <SavedPosts className="w-6"></SavedPosts>
                  Save post
                </a>
                <a href="" className={hoverClass}>
                  <Image src={turnNotification} />
                  Turn notifications
                </a>
                <a href="" className={hoverClass}>
                  <Image src={hideEye} />
                  Hide Post
                </a>
                <a href="" className={hoverClass}>
                  <Image src={trashcan} />
                  Delete
                </a>
                <a href="" className={hoverClass}>
                  <Image src={report} />
                  Report
                </a>
              </div>
            )}
          </div>
        </ClickOutHandler>
      </div>
      <div className="px-4 py-3">
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          omnis accusamus numquam delectus repellendus nostrum repudiandae saepe
          fuga. Cum ut quas eum ducimus rerum. Voluptatum consequatur dolores
          commodi soluta provident.
        </p>
        <img
          src="https://images.unsplash.com/photo-1464757494038-157e877f60d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="posted photo"
          className="rounded-md overflow-hidden"
        />
      </div>
      <div className="flex gap-2 ml-2 p-4">
        <a className="flex gap-1">
          <Image src={heart} /> 74
        </a>
        <a className="flex gap-1">
          <Image src={comment} /> 12
        </a>
        <a className="flex gap-1">
          <Image src={share} /> 4
        </a>
      </div>
      <div className="flex gap-2">
        <div className="w-12 rounded-full  overflow-hidden">
          <img
            className=""
            src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <textarea
          name=""
          id=""
          placeholder="Leave your comment"
          className="grow border rounded-2xl p-1"
        ></textarea>
      </div>
    </Card>
  );
};

export default ExistingPost;
