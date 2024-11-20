import Card from "./Card";
import heart from "@/public/Heart.svg";
import comment from "@/public/Comment.svg";
import share from "@/public/Share.svg";
import more from "@/public/More.svg";
import Image from "next/image";

const ExistingPost = () => {
  return (
    <Card>
      <div className="flex gap-2">
        <div className="w-12 rounded-full  overflow-hidden">
          <img
            className=""
            src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="flex gap-1 ml-4 flex-col">
          <div className="flex gap-1 mt-3">
            <h2 className="font-bold">John Doe</h2>
            <p>posted</p>
            <span className="text-blue-500 font-bold">album</span>
            
          </div>
          <div>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <div className="grow text-right">
          <button><Image src={more}/></button>
        </div>
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
