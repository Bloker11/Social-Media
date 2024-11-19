import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className="flex max-w-4xl mt-4 mx-auto gap-6">
      <div className="w-1/3">
        <Navigation/>
      </div>
      <div className="grow">
        <PostCard/>
        <Card>first post test</Card>
      </div>
    </div>
  );
}
