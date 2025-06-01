import { HiMiniHashtag, HiPencil, HiTrash } from "react-icons/hi2";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import ClassesTable from "./ClassesTable";
import CreateClassForm from "./CreateClassForm";
import CreateEditCourseForm from "./CreateEditCourseForm";
import { useCourses } from "./useCourses";
import { useDeleteCourse } from "./useDeleteCourse";
import GridTableBody from "./GridTableBody";
function ClassesGridLayout() {
  const { courses, isLoading } = useCourses();
  const { deleteCourse, isLoading: isDeleting } = useDeleteCourse();

  if (isLoading) return <Spinner />;

  return (
    <Row>
      <Modal.Window name="class-form" buttonClose={true}>
        <CreateClassForm />
      </Modal.Window>

      <Modal.Window name="course-form" buttonClose={true}>
        <CreateEditCourseForm />
      </Modal.Window>

      <Menus>
        {courses.map((course, i) => {
          return (
            <ClassesTable key={course?.id}>
              <Modal.Window name={course.id} buttonClose={true}>
                <CreateEditCourseForm course={course} id={course.id} />
              </Modal.Window>
              <Modal.Window name={"delete-" + course.id} buttonClose={true}>
                <ConfirmDelete
                  onConfirm={() => deleteCourse(course.id)}
                  isLoading={isDeleting}
                >
                  <span>Tens a certeza que deseja deletar este curso?</span>
                </ConfirmDelete>
              </Modal.Window>
              <ClassesTable.Header>
                <Heading as="h3">
                  <span>
                    <HiMiniHashtag /> {course?.courseName}
                  </span>
                  <Menus.Toggle menuId={course?.id} />
                </Heading>
              </ClassesTable.Header>
              <GridTableBody course={course} i={i} />
              <Menus.Menu menuId={course?.id}>
                <Menus.List>
                  <Modal.Open opens={course.id}>
                    <Menus.Button icon={<HiPencil />}>Editar nome</Menus.Button>
                  </Modal.Open>
                  <Modal.Open opens={"delete-" + course.id}>
                    <Menus.Button icon={<HiTrash />}>Exluir curso</Menus.Button>
                  </Modal.Open>
                </Menus.List>
              </Menus.Menu>
            </ClassesTable>
          );
        })}

        <ClassesTable>
          <ClassesTable.Header>
            <Heading as="h3">
              <span>
                <HiMiniHashtag /> Ensino Fundamental
              </span>
              <Menus.Toggle />
            </Heading>
          </ClassesTable.Header>
          <GridTableBody />
        </ClassesTable>
      </Menus>
    </Row>
  );
}

export default ClassesGridLayout;
