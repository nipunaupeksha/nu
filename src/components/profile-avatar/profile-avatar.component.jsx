import React from "react";
import { IconLogout, IconSettings, IconUser } from "../icons";

const ProfileAvatar = () => (
  <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
    <label
      className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
      tabIndex="0"
    >
      <div className="flex flex-row gap-4 p-4">
        <div className="avatar-square avatar avatar-md">
          <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
        </div>

        <div className="flex flex-col justify-center">
          <span>Sandra Marx</span>
        </div>
      </div>
    </label>
    <div className="dropdown-menu-right-top dropdown-menu ml-2">
      <a className="dropdown-item text-sm">
        <div className="flex gap-2">
          <IconUser /> <span>Profile</span>
        </div>
      </a>
      <a tabIndex="-1" className="dropdown-item text-sm">
        <div className="flex gap-2">
          <IconSettings /> <span>Account Settings</span>
        </div>
      </a>
      <a tabIndex="-1" className="dropdown-item text-sm">
        <div className="flex gap-2">
          <IconLogout /> <span>Logout</span>
        </div>
      </a>
    </div>
  </div>
);

export default ProfileAvatar;
