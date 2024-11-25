// Layout.js
import React from 'react';
import {BrowserRouter, Routes, Route, useLocation, Navigate  } from 'react-router-dom';
import Login from './components/Login/Login';
import SideBar from './components/SideBar/SideBar';
import UsersList from './components/AdminPages/UsersList/UsersLIst';
import Branches from './components/AdminPages/Branches/Branches';
import StaffLogs from './components/AdminPages/StaffLogs/StaffLogs';
// import TicketsHistory from './components/AdminPages/TicketsHistory/TicketsHistory';
import AddNewUser from './components/AdminPages/UsersList/AddNewUser';
import EditUser from './components/AdminPages/UsersList/EditUser';
import UserRoleManagement from './components/AdminPages/UserManagement/UsersManagement';
import EditUserRole from './components/AdminPages/UserManagement/EditUserRole';
import AddNewRole from './components/AdminPages/UserManagement/AddNewRole';
import AddBranch from './components/AdminPages/Branches/AddBranch';
import EditBranch from './components/AdminPages/Branches/EditBranch';
import MyProfile from './components/AdminPages/MyProfile/MyProfile';
// import GenerateTickets from './components/StaffPages/GenerateTickets/GenerateTickets';
import ProtectedRoute from './components/PrivateRoute/PrivateRoute';
import { AuthContextProvider } from './components/Authentication/authContext';
import {getCookie} from './components/Authentication/getCookie';
import { LoaderProvider } from './components/Loaders/LoaderContext';
import TemplateManagement from './components/AdminPages/TemplateManagement/TemplateManagement';
import EditUserTemplateAccess from './components/AdminPages/TemplateManagement/EditUserTemplateAccess';
import ResourcePage from './components/AdminPages/Resources/ResourcePage';
import TicketCategory from './components/AdminPages/TemplateManagement/TicketCategory';
import ResourcesLists from './components/AdminPages/Resources/ResourcesLists';
import ViewResources from './components/AdminPages/Resources/ViewResources';
import ForgotPassword from './components/PasswordReset/ForgotPassword';
import ResetPassword from './components/PasswordReset/ResetPassword';
import CheckEmail from './components/PasswordReset/CheckEmail';
import EditResources from './components/AdminPages/Resources/EditResources';
import Dashboard from './components/AdminPages/Dashboard/Dashboard';
import ReviewAndApprovals from './components/AdminPages/ReviewAndApprovals/ReviewAndApprovals';
import ClientList from './components/AdminPages/ClientManagement/ClientList';
import Reports from './components/AdminPages/Reports/Reports';
import ConsultantList from './components/AdminPages/ConsultantManagement/ConsultantList';
import SystemSettings from './components/AdminPages/SystemsSetting/SystemSettings';






function Layout() {
  const location = useLocation();
  const userRole = getCookie('role_name');
  const noSidebarPaths = ['/', '/not-authorized'];

const  isSegmentCorrect = (url , pathNameURL) => {

    const url_check = pathNameURL;
    const regex = new RegExp(`/${url_check}/[a-zA-Z0-9]+$`);
    return regex.test(url);

  }

  // Check if the current path should hide the sidebar
  const shouldHideSidebar = noSidebarPaths.includes(location.pathname);
//  console.log(location);
  return (
    <LoaderProvider>
    <AuthContextProvider>
    <>
        {!shouldHideSidebar && location.pathname !== '/' && location.pathname !== '/forgot-password' && !isSegmentCorrect( location.pathname , "reset-password" ) && location.pathname !== '/open-email' && <SideBar role={userRole} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userlist" element={<ProtectedRoute element={<UsersList />} allowedRoles={['Admin']} />} />
        <Route path="/system-settings" element={<ProtectedRoute element={<SystemSettings />} allowedRoles={['Admin']} />} />
        <Route path="/consultant-list" element={<ProtectedRoute element={<ConsultantList />} allowedRoles={['Admin']} />} />
        <Route path="/reports" element={<ProtectedRoute element={<Reports />} allowedRoles={['Admin']} />} />
        <Route path="/client-list" element={<ProtectedRoute element={<ClientList />} allowedRoles={['Admin']} />} />
        <Route path="/reviews-and-approvals" element={<ProtectedRoute element={<ReviewAndApprovals />} allowedRoles={['Admin']} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} allowedRoles={['Admin']} />} />
        <Route path="/forgot-password"  element={<ForgotPassword />}/>
        <Route path="/reset-password/:passwordToken" name="reset-password"  element={<ResetPassword />}/>
        <Route path="/open-email"  element={<CheckEmail />}/>
        <Route path="/view-resource/:resourceID" element={<ProtectedRoute element={<ViewResources />} allowedRoles={['Admin']} />} />
        <Route path="/staff-view-resource/:slug" element={<ProtectedRoute element={<ViewResources />} allowedRoles={['Staff']} />} />
        <Route path="/resources-list" element={<ProtectedRoute element={<ResourcesLists />} allowedRoles={['Admin', 'Staff']} />} />
        <Route path="/resources" element={<ProtectedRoute element={<ResourcePage />} allowedRoles={['Admin']} />} />
        <Route path="/edit-resource/:resourceID" element={<ProtectedRoute element={<EditResources />} allowedRoles={['Admin']} />} />
        <Route path="/ticket-category" element={<ProtectedRoute element={<TicketCategory />} allowedRoles={['Admin']} />} />
        <Route path="/template-management" element={<ProtectedRoute element={<TemplateManagement />} allowedRoles={['Admin']} />} />
        <Route path="/assign-tickets/:userId" element={<ProtectedRoute element={<EditUserTemplateAccess />} allowedRoles={['Admin']} />} />
        <Route path="/user-management" element={<ProtectedRoute element={<UserRoleManagement />} allowedRoles={['Admin']} />} />
        <Route path="/staff-logs" element={<ProtectedRoute element={<StaffLogs />} allowedRoles={['Admin']} />} />
        <Route path="/branches" element={<ProtectedRoute element={<Branches />} allowedRoles={['Admin']} />} />
        <Route path="/add-new-user" element={<ProtectedRoute element={<AddNewUser />} allowedRoles={['Admin']} />} />
        <Route path="/edit-user/:userId" element={<ProtectedRoute element={<EditUser />} allowedRoles={['Admin']} />} />
        <Route path="/edit-user-role/:roleId" element={<ProtectedRoute element={<EditUserRole />} allowedRoles={['Admin']} />} />
        <Route path="/add-new-role" element={<ProtectedRoute element={<AddNewRole />} allowedRoles={['Admin']} />} />
        <Route path="/add-branch" element={<ProtectedRoute element={<AddBranch />} allowedRoles={['Admin']} />} />
        <Route path="/edit-branch/:branchId" element={<ProtectedRoute element={<EditBranch />} allowedRoles={['Admin']} />} />
        <Route path="/my-profile" element={<ProtectedRoute element={<MyProfile />} allowedRoles={['Admin', 'Staff']} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
    </AuthContextProvider>
    </LoaderProvider>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/cfo-portal'>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
