import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import BookOpenIcon from "@heroicons/react/24/outline/BookOpenIcon";
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';
import PlayIcon from '@heroicons/react/24/outline/PlayIcon';
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

const iconClasses = `h-6 w-6`;

const routes = [
    {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Beranda',
  },

  {
    path: '', //no url needed as this has submenu
    icon: <UserGroupIcon className={`${iconClasses} inline`}/>, // icon component
    name: 'Sosialisasi', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/EducationUnit',
        name: 'Satuan Pendidikan',
      },
      {
        path: '/app/HealthFacility', //url
        name: 'Fasilitas Kesehatan', // name that appear in Sidebar
      },
      {
        path: '/app/PublicHousing',
        name: 'Rusun',
      },
      {
        path: '/app/Mall',
        name: 'Mall',
      },
      {
        path: '/app/Hotel',
        name: 'Hotel',
      },
      {
        path: '/app/Office',
        name: 'Perkantoran',
      },
      {
        path: '/app/Apartment',
        name: 'Apartment',
      },
      {
        path: '/app/UrbanVillage',
        name: 'Kelurahan Tangguh',
      },
    ]
  },

  {
    path: '/app/Education', // url
    icon: <BookOpenIcon className={iconClasses}/>, // icon component
    name: 'Materi', // name that appear in Sidebar
  },

  {
    path: "", //no url needed as this has submenu
    icon: <PlayIcon className={`${iconClasses} inline`} />, // icon component
    name: "Game", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/GameTK",
        name: "Game TK",
      },
      {
        path: "/app/GameSD", //url
        name: "Game SD", // name that appear in Sidebar
      },
      {
        path: "/app/GameSMP",
        name: "Game SMP",
      },
      {
        path: "/app/GameSMA",
        name: "Game SMA",
      },
      {
        path: "/app/GameMasyarakat",
        name: "Game Masyarakat",
      },
      
    ],
  },

  {
    path: '/app/SuperAdmin/DataAdmin', // url
    icon: <Cog6ToothIcon className={iconClasses}/>, // icon component
    name: 'Data Admin', // name that appear in Sidebar
    roles: ["superadmin"], // hanya superadmin yang bisa lihat
  },
  {
    path: '/app/SuperAdmin/AuditAdmin', // url
    icon: <ArrowPathIcon className={iconClasses}/>, // icon component
    name: 'Audit Admin', // name that appear in Sidebar
    roles: ["superadmin"], // hanya superadmin yang bisa lihat
  },

  {
    path: "/app/Profile",
    icon: <UserIcon className={iconClasses} />,
    name: "Profile",
    roles: ["admin", "superadmin"], // hanya admin dan superadmin yang bisa lihat
  },
];

// Fungsi filter route berdasarkan role
export const getSidebarRoutes = (role = "user") => {
  return routes
    .filter((route) => !route.roles || route.roles.includes(role))
    .map((route) => {
      if (route.submenu) {
        const filteredSubmenu = route.submenu.filter(
          (sub) => !sub.roles || sub.roles.includes(role)
        );
        return { ...route, submenu: filteredSubmenu };
      }
      return route;
    });
};
