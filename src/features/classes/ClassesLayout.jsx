import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import ClassesTable from "./ClassesTable";
import { useCourses } from "./useCourses";
function ClassesLayout() {
  const { courses, isLoading } = useCourses();
  if (isLoading) return <Spinner />;
  console.log(courses);
  return (
    <Row>
      {courses.map((course) => {
        return (
          <ClassesTable key={course?.id}>
            <ClassesTable.Header>
              <Heading as="h4">{course?.courseName}</Heading>
            </ClassesTable.Header>
            <ClassesTable.Body
              render={(classe) => (
                <ClassesTable.Box classe={classe}></ClassesTable.Box>
              )}
              data={course.classes}
            />
          </ClassesTable>
        );
      })}
    </Row>
  );
}

export default ClassesLayout;
