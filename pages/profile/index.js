import Layout from "@/components/Layout"
import Card from "@/components/Card"

const index = () => {
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="h-56 overflow-hidden flex items-center ">
          <img
            src="https://images.unsplash.com/photo-1464757494038-157e877f60d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile theme photo"
          />
        </div>
        <div className="p-4">John Doe</div>
      </Card>
    </Layout>
  );
}

export default index