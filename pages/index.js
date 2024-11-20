import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import PostCard from "@/components/PostCard";
import ExistingPost from "@/components/ExistingPost";

export default function Home() {
  return (
    <div className="flex max-w-4xl mt-4 mx-auto gap-6">
      <div className="w-3/12">
        <Navigation/>
      </div>
      <div className="w-9/12">
        <PostCard/>
        <ExistingPost/>
      </div>
    </div>
  );
}
