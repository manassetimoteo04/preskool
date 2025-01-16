import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/:classId" element={<Class />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/human-resources" element={<HumanResources />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:studentId" element={<Student />} />
            <Route
              path="/students/:studentId/marks"
              element={<StudentMark />}
            />
            <Route path="/students/:studentId/edit" element={<StudentEdit />} />
            <Route path="students/add-student" element={<AddStudent />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/add-teacher" element={<AddTeacher />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
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
  );
}

export default App;
