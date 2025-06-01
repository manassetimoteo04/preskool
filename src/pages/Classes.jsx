import { HiPlus } from "react-icons/hi2";
import ClassesLayout from "../features/classes/ClassesGridLayout";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Modal from "../ui/Modal";
import ButtonIcon from "../ui/ButtonIcon";
import styled from "styled-components";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { useGridList } from "../features/classes/ClassesTableContext";
import ClassesListLayout from "../features/classes/ClassesListLayout";

const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

const GridList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: end;
`;
function Classes() {
  const { isGrid, toggleIsGrid } = useGridList();
  return (
    <Modal>
      <Row>
        <Row type="horizontal">
          <Heading as="h2">Turmas e Séries</Heading>
          <Flex>
            <Modal.Open opens="class-form">
              <Button>
                <HiPlus />
                Turma
              </Button>
            </Modal.Open>
            <Modal.Open opens="course-form">
              <Button>
                <HiPlus />
                Curso
              </Button>
            </Modal.Open>
          </Flex>
        </Row>
        <GridList>
          <span>Ver {!isGrid ? "Grelha" : "Lista"}</span>
          <ButtonIcon onClick={toggleIsGrid}>
            {!isGrid ? <HiOutlineViewGrid /> : <HiOutlineViewList />}
          </ButtonIcon>
        </GridList>
        {isGrid && <ClassesLayout />}
        {!isGrid && <ClassesListLayout />}
      </Row>
    </Modal>
  );
}

export default Classes;
