import {
  SIDEBAR_ACCOUNT_CONSTANTS,
  SIDEBAR_PAYMENTS_CONSTANTS,
  SIDEBAR_SETTINGS_CONSTANTS,
} from "../../constants/side-bar.constants";
import {
  IconArrow,
  IconBankCard,
  IconCustomer,
  IconDashboard,
  IconGoblet,
  IconLogo,
  IconMenu,
  IconSettings,
  IconSystem,
  IconUser,
} from "../icons";
import ProfileAvatar from "../profile-avatar/profile-avatar.component";
import SidebarMenuList from "../sidebar-menu-list/sidebar-menu-list.component";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-row sm:gap-3">
      <div className="sm:w-full sm:max-w-[18rem]">
        <input
          type="checkbox"
          id="sidebar-mobile-fixed"
          className="sidebar-state"
        />
        <label
          htmlFor="sidebar-mobile-fixed"
          className="sidebar-overlay"
        ></label>
        <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
          <section className="sidebar-title items-center p-4 pl-8">
            <IconLogo tailwindStyles="mr-2" />
            <div className="flex flex-col items-start">
              <span>NU</span>
              <span className="text-xs font-normal text-content2">
                POS System
              </span>
            </div>
          </section>
          <section className="sidebar-content">
            <nav className="menu rounded-md">
              <section className="menu-section px-4">
                <ul className="menu-items">
                  <li className="menu-item">
                    <IconDashboard />
                    <span>Dashboard</span>
                  </li>
                  <li className="menu-item">
                    <IconSystem />
                    <span>POS System</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="menu-1"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-1"
                    >
                      <div className="flex gap-2">
                        <IconBankCard />
                        <span>Payments</span>
                      </div>

                      <span className="menu-icon">
                        <IconArrow />
                      </span>
                    </label>
                    <SidebarMenuList items={SIDEBAR_PAYMENTS_CONSTANTS} />
                  </li>

                  <li className="menu-item">
                    <IconGoblet />
                    <span>Products</span>
                  </li>
                  <li className="menu-item">
                    <IconCustomer />
                    <span>Customers</span>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      id="menu-2"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-2"
                    >
                      <div className="flex gap-2">
                        <IconSettings />
                        <span>Settings</span>
                      </div>

                      <span className="menu-icon">
                        <IconArrow />
                      </span>
                    </label>
                    <SidebarMenuList items={SIDEBAR_SETTINGS_CONSTANTS} />
                  </li>
                </ul>
              </section>
            </nav>
          </section>
          <section className="sidebar-footer justify-end bg-gray-2 pt-2">
            <div className="divider my-0"></div>
            <ProfileAvatar />
            <div className="divider my-0"></div>
            <p className="text-xs text-slate-300 pt-2">
              Copyright &copy; 2023 Nipuna Upeksha
            </p>
            <p className="text-xs text-slate-300 pb-2">All rights reserved.</p>
          </section>
        </aside>
      </div>
      <div className="flex w-full flex-col">
        <div className="w-fit">
          <label htmlFor="sidebar-mobile-fixed" className="sm:hidden">
            <IconMenu />
          </label>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
