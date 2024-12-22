import { Outlet } from "react-router-dom";

const ArticlesLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default ArticlesLayout;
