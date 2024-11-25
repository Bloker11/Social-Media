import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Link from "next/link";
import PostProfilePage from "@/public/icons/PostProfilePage.js";
import Report from "@/public/icons/Report.js";
import Friends from "@/public/icons/Friends.js";
import Photos from "@/public/icons/Photos.js";
import Image from "next/image";
import ExistingPost from "@/components/ExistingPost";
import { useRouter } from "next/router";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { asPath: pathname } = router;

  console.log(pathname);

  const active =
    "flex gap-2 text-blue-800 border-b-4 border-blue-800 p-2 bg-blue-50 rounded-xl";

  const notActive =
    "flex gap-2 p-2 transition ease-in-out hover:bg-blue-200 rounded-2xl items-center";

  return (
    <Layout>
      <Card noPadding={true}>
        <div className="relative">
          <div className="h-32 overflow-hidden flex items-center">
            <img
              src="https://images.unsplash.com/photo-1464757494038-157e877f60d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile theme photo"
            />
          </div>
          <div className="absolute top-24 left-3">
            <img
              className="rounded-full w-[20%] overflow-hidden "
              src="https://images.unsplash.com/photo-1577975819014-2d6f1e721e77?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="pb-12 ml-36">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-gray-500">Warsaw, Poland</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/profile/posts"
              className={
                pathname === "/profile/posts" || pathname === "/profile"
                  ? active
                  : notActive
              }
            >
              <PostProfilePage />
              Posts
            </Link>
            <Link
              href="/profile/about"
              className={pathname === "/profile/about" ? active : notActive}
            >
              <Report></Report>
              About
            </Link>
            <Link
              href="/profile/friends"
              className={pathname === "/profile/friends" ? active : notActive}
            >
              <Friends />
              Friends
            </Link>
            <Link
              href="/profile/photos"
              className={pathname === "/profile/photos" ? active : notActive}
            >
              <Photos></Photos>
              Photos
            </Link>
          </div>
        </div>
      </Card>
      {(pathname === "/profile/posts" || pathname === "/profile") && (
        <div>
          <ExistingPost />
        </div>
      )}

      {(pathname === "/profile/about") && (
        <div>
          <Card>
            <div className="p-4 flex flex-col gap-4">
              <h1 className="font-bold text-2xl ">
                About me
              </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur fugiat temporibus. Eaque repellendus reiciendis eveniet obcaecati, doloribus sequi quos suscipit maxime numquam iure, culpa dolorum ipsam facere quasi ut.
            </p>

            </div>
          </Card>
        </div>
      )}
    </Layout>
  );
};

export default index;
