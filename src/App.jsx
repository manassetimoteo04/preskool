import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";

import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Financial from "./pages/Financial";
import HumanResources from "./pages/HumanResources";
import Students from "./pages/Students";
import Student from "./pages/Student";
import Teachers from "./pages/Teachers";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AddStudent from "./pages/AddStudent";
import StudentMark from "./pages/StudentMark";
import StudentEdit from "./pages/StudentEdit";
import Class from "./pages/Class";
import AddTeacher from "./pages/AddTeacher";
import Teacher from "./pages/Teacher";
import TeacherEdit from "./pages/TeacherEdit";
import EmployeeHire from "./pages/EmployeeHire";
import Employee from "./pages/Employee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeLeaves from "./pages/EmployeeLeaves";
import EmployeeLeaveDetail from "./pages/EmployeeLeaveDetail";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import FinancialLatePayments from "./pages/FinancialLatePayments";
import Login from "./pages/Login";
import AreaTeacher from "./pages/AreaTeacher";
import ProtectedRoute from "./ui/ProtectedRoute";
import MainAppLayout from "./ui/MainAppLayout";
import StudentAppLayout from "./features/areas/student/StudentAppLayout";
import AreaStudentProfile from "./pages/AreaStudentProfile";
import AreaStudentMates from "./pages/AreaStudentMates";
import AreaStudentSchedules from "./pages/AreaStudentSchedules";
import AreaStudentsMarks from "./pages/AreaStudentsMarks";
import { AuthContextProvider } from "./context/AuthContext";
import PageNotFound from "./ui/PageNotFound";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <AuthContextProvider>
      <DarkModeContextProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/area/admin" element={<MainAppLayout />}>
                  <Route path="/area/admin/dashboard" element={<Dashboard />} />
                  <Route path="/area/admin/students" element={<Students />} />
                  <Route path="students/:studentId" element={<Student />} />
                  <Route
                    path="/area/admin/students/:studentId/marks"
                    element={<StudentMark />}
                  />
                  <Route
                    path="/area/admin/students/:studentId/edit"
                    element={<StudentEdit />}
                  />
                  <Route
                    path="/area/admin/students/add-student"
                    element={<AddStudent />}
                  />
                  <Route path="/area/admin/classes" element={<Classes />} />
                  <Route
                    path="/area/admin/classes/:classId"
                    element={<Class />}
                  />
                  <Route path="/area/admin/teachers" element={<Teachers />} />
                  <Route
                    path="/area/admin/teachers/:teacherId"
                    element={<Teacher />}
                  />
                  <Route
                    path="teachers/:teacherId/edit"
                    element={<TeacherEdit />}
                  />
                  <Route
                    path="/area/admin/teachers/add-teacher"
                    element={<AddTeacher />}
                  />
                  <Route
                    path="/area/admin/human-resources"
                    element={<HumanResources />}
                  />
                  <Route
                    path="/area/admin/human-resources/hire"
                    element={<EmployeeHire />}
                  />
                  <Route
                    path="/area/admin/human-resources/employee/:employeeId"
                    element={<Employee />}
                  />
                  <Route
                    path="/area/admin/human-resources/employee/:employeeId/edit"
                    element={<EditEmployee />}
                  />
                  <Route
                    path="/area/admin/human-resources/leaves"
                    element={<EmployeeLeaves />}
                  />
                  <Route
                    path="/area/admin/human-resources/leaves/:leaveId"
                    element={<EmployeeLeaveDetail />}
                  />
                  <Route path="/area/admin/financial" element={<Financial />} />
                  <Route
                    path="/area/admin/financial/late-payments"
                    element={<FinancialLatePayments />}
                  />

                  <Route path="/area/admin/settings" element={<Settings />} />
                  <Route path="/area/admin/profile" element={<Profile />} />
                </Route>

                <Route path="/area/student" element={<StudentAppLayout />}>
                  <Route index element={<Navigate to="home" replace />} />
                  <Route
                    path="/area/student/home"
                    element={<AreaStudentProfile />}
                  />
                  <Route
                    path="/area/student/mates"
                    element={<AreaStudentMates />}
                  />
                  <Route
                    path="/area/student/schedules"
                    element={<AreaStudentSchedules />}
                  />
                  <Route
                    path="/area/student/grades"
                    element={<AreaStudentsMarks />}
                  />
                </Route>
                <Route path="/area/teacher" element={<AreaTeacher />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-rigth"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: { duration: 5000 },
              loading: { duration: 3000 },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
