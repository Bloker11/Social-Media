import Navigation from "./Navigation";

const Layout = ({children}) => {
  return (
    <div className="flex max-w-4xl mt-4 mx-auto gap-6">
      <div className="w-3/12">
        <Navigation />
      </div>
      <div className="w-9/12">
        {children}
      </div>
    </div>
  );
}

export default Layout