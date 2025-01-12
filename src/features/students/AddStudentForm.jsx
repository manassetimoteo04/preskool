import { HiOutlineExclamationCircle } from "react-icons/hi";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import FormParentInfo from "./FormParentInfo";
import FormPersonalInfo from "./FormPersonalInfo";
import { HiOutlineDocumentDuplicate, HiOutlineUserPlus } from "react-icons/hi2";
import FormSchoolInfor from "./FormSchoolInfor";
import FormButtons from "./FormButtons";
import { useForm } from "react-hook-form";
import ButtonsParentType from "./ButtonsParentType";
import { useState } from "react";
import Modal from "../../ui/Modal";

const data = {
  fullName: "234",
  birthYear: "2025-01-15",
  province: "234",
  idNumber: "234",
  emissionDate: "2025-01-16",
  residence: "234",
  studentPhone: "324",
  fatherName: "234",
  fatherPhone: "324",
  fatherEmail: "324",
  fatherOccupation: "234",
  biUpload: {
    0: {},
  },
  docUpload: {
    0: {},
  },
  schoolYear: "234",
  grade: "234",
  course: "234",
  schoolPeriod: "324",
  genre: "m",
};
function AddStudentForm() {
  const [genre, setGenre] = useState("m");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: data });
  const [parent, setParent] = useState("father");
  return (
    <Modal>
      <Form>
        <Form.Group columns="1fr 1fr 1fr 1fr">
          <Form.Header icon={<HiOutlineExclamationCircle />}>
            <Heading as="h3">Informações pessoais</Heading>
          </Form.Header>
          <FormPersonalInfo
            register={register}
            errors={errors}
            setGenre={setGenre}
            genre={genre}
          />
        </Form.Group>

        <Form.Group columns="1fr 1fr 1fr 1fr">
          <Form.Header icon={<HiOutlineUserPlus />}>
            <Heading as="h3">Informação do Parentes & Guardião</Heading>
          </Form.Header>
          <Form.Row>
            <ButtonsParentType parent={parent} setParent={setParent} />
          </Form.Row>
          <FormParentInfo register={register} parent={parent} errors={errors} />
        </Form.Group>

        <Form.Group columns="1fr 1fr">
          <Form.Header icon={<HiOutlineDocumentDuplicate />}>
            <Heading as="h3">Documentos & Informações da inscrição</Heading>
          </Form.Header>
          <FormSchoolInfor register={register} errors={errors} />
        </Form.Group>
        <FormButtons
          handleSubmit={handleSubmit}
          genre={genre}
          errors={errors}
          parent={parent}
        />
      </Form>
    </Modal>
  );
}

export default AddStudentForm;
