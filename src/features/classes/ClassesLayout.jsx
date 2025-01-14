import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import ClassesTable from "./ClassesTable";
import CreateClassForm from "./CreateClassForm";
import { useCourses } from "./useCourses";
function ClassesLayout() {
  const { courses, isLoading } = useCourses();
  if (isLoading) return <Spinner />;
  return (
    <Row>
      <Modal.Window name="class-form" buttonClose={true}>
        <CreateClassForm />
      </Modal.Window>
      {courses.map((course) => {
        return (
          <ClassesTable key={course?.id}>
            <ClassesTable.Header>
              <Heading as="h4">{course?.courseName}</Heading>
            </ClassesTable.Header>
            <ClassesTable.Body
              courseId={course}
              render={(classe) => (
                <ClassesTable.Box classe={classe}></ClassesTable.Box>
              )}
            />
          </ClassesTable>
        );
      })}
    </Row>
  );
}

export default ClassesLayout;
