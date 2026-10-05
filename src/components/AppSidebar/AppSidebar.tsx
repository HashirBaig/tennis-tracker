import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users } from "lucide-react";
import { cn } from "../../lib/utils";
import playersLogo from "@/assets/players_logo_compressed.png";

function Sidebar() {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   navigate("/login");
  // };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors w-fit sm:w-full",
      isActive
        ? "bg-green-950 text-green-100"
        : "text-green-50 hover:bg-green-950/80 hover:text-green-100",
    );

  return (
    <aside
      className="
    fixed bottom-0 left-0 z-50 w-full p-4 sm:p-2
    sm:left-0 sm:top-0 sm:bottom-auto sm:w-64
    sm:h-screen sm:flex sm:flex-col sm:justify-between
    border-r border-green-800 bg-green-800
    sm:shrink-0
  "
    >
      <div>
        <div className="hidden sm:flex sm:items-center sm:justify-center mb-8 sm:visible">
          <img
            src={playersLogo}
            alt="logo"
            className="w-30 h-auto cursor-pointer"
          />
        </div>

        <nav className="flex items-center justify-around sm:flex-col sm:gap-4">
          <NavLink to="/" end className={navLinkClasses}>
            <LayoutDashboard className="size-6 sm:size-5" />
            <span className="hidden sm:block">Dashboard</span>
          </NavLink>

          <NavLink to="/stats" className={navLinkClasses}>
            <Users className="size-6 sm:size-5" />
            <span className="hidden sm:block">Statistics</span>
          </NavLink>
        </nav>
      </div>

      {/* <div className="border-t border-green-50 pt-4 px-4">
        <p className="text-sm font-medium truncate"></p>
        <p className="text-xs text-green-500 mb-3 capitalize"></p>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm cursor-pointer text-green-50 hover:text-red-400 transition-colors"
        >
          <LogOut className="size-4" />
          Logout
        </button>
      </div> */}
    </aside>
  );
}

export default Sidebar;
