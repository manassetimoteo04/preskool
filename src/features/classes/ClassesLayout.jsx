import { HiMiniHashtag, HiPencil, HiTrash } from "react-icons/hi2";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import ClassesTable from "./ClassesTable";
import CreateClassForm from "./CreateClassForm";
import CreateCourseForm from "./CreateCourseForm";
import { useCourses } from "./useCourses";
function ClassesLayout() {
  const { courses, isLoading } = useCourses();
  console.log(courses);
  if (isLoading) return <Spinner />;
  return (
    <Row>
      <Modal.Window name="class-form" buttonClose={true}>
        <CreateClassForm />
      </Modal.Window>
      <Modal.Window name="course-form" buttonClose={true}>
        <CreateCourseForm />
      </Modal.Window>
      <Menus>
        {courses.map((course, i) => {
          return (
            <ClassesTable key={course?.id}>
              <ClassesTable.Header>
                <Heading as="h3">
                  <span>
                    <HiMiniHashtag /> {course?.courseName}
                  </span>
                  <Menus.Toggle menuId={course?.id} />
                </Heading>
              </ClassesTable.Header>
              <ClassesTable.Body
                courseId={course}
                index={i}
                render={(classe) => (
                  <ClassesTable.Box
                    classe={classe}
                    key={classe.id}
                  ></ClassesTable.Box>
                )}
              />
              <Menus.Menu menuId={course?.id}>
                <Menus.List>
                  <Menus.Button icon={<HiPencil />}>Editar nome</Menus.Button>
                  <Menus.Button icon={<HiTrash />}>Exluir curso</Menus.Button>
                </Menus.List>
              </Menus.Menu>
            </ClassesTable>
          );
        })}
      </Menus>
    </Row>
  );
}

export default ClassesLayout;
