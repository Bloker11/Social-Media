import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import PostCard from "@/components/PostCard";
import ExistingPost from "@/components/ExistingPost";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <PostCard />
      <ExistingPost />
    </Layout>
  );
}
