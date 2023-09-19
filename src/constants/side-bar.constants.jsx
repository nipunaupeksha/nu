import {
  IconAccountSettings,
  IconCashIn,
  IconCashOut,
  IconUSB,
} from "../components/icons";

export const SIDEBAR_ACCOUNT_CONSTANTS = [
  { id: 1, name: "Edit Profile" },
  { id: 2, name: "Change Password" },
];

export const SIDEBAR_SETTINGS_CONSTANTS = [
  { id: 1, name: "Application Settings", icon: <IconUSB /> },
  { id: 2, name: "Account Settings", icon: <IconAccountSettings /> },
];

export const SIDEBAR_PRODUCTS_CONSTANTS = [
  { id: 1, name: "Add Product" },
  { id: 2, name: "Update / Remove Product" },
  { id: 3, name: "List Products" },
  { id: 4, name: "Calculate Product Price" },
];

export const SIDEBAR_PAYMENTS_CONSTANTS = [
  { id: 1, name: "Cash In", icon: <IconCashIn /> },
  { id: 2, name: "Cash Out", icon: <IconCashOut /> },
];
