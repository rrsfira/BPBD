import React from "react";
import { useLocation } from "react-router-dom";
import { getSidebarRoutes } from "./sidebarRoutes";  // mengimpor fungsi ini

const Sidebar = () => {
  const role = localStorage.getItem("role") || "user";
  const sidebarRoutes = getSidebarRoutes(role);
  const location = useLocation();

  return (
    <aside className="w-64 bg-white h-screen shadow-lg">
      <ul className="menu p-4">
        {sidebarRoutes.map((route, index) => (
          <li key={index}>
            {route.submenu ? (
              <details open={location.pathname.includes(route.path)}>
                <summary className="flex items-center gap-2">
                  {route.icon}
                  <span>{route.name}</span>
                </summary>
                <ul>
                  {route.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <a href={sub.path} className={location.pathname === sub.path ? "active" : ""}>
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <a href={route.path} className="flex items-center gap-2">
                {route.icon}
                <span>{route.name}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
