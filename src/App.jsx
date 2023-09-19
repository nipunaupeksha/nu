import Sidebar from "./components/sidebar/sidebar.component";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./routes/dashboard/dashboard.page";
import SignIn from "./routes/sign-in/sign-in.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        {/* <Route index element={<Dashboard />} /> */}
        <Route index element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
