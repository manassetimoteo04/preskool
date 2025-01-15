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

function AddStudentForm({ editId, data = {} }) {
  const [genre, setGenre] = useState("m");
  const isEditSession = Boolean(editId);

  const parentInfo = isEditSession
    ? {
        [data?.parent?.type + "Phone"]: data?.parent?.phone,
        [data?.parent?.type + "Email"]: data?.parent?.email,
        [data?.parent?.type + "Name"]: data?.parent?.name,
        [data?.parent?.type + "Occupation"]: data?.parent?.occupation,
      }
    : {};
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: isEditSession ? { ...data, ...parentInfo } : {},
  });
  const [parent, setParent] = useState(data?.parent?.type || "father");
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
          <FormSchoolInfor
            register={register}
            errors={errors}
            isEditSession={isEditSession}
            watch={watch}
          />
        </Form.Group>
        <FormButtons
          handleSubmit={handleSubmit}
          genre={genre}
          errors={errors}
          parent={parent}
          internNumber={data?.internNumber}
          isEditSession={isEditSession}
        />
      </Form>
    </Modal>
  );
}

export default AddStudentForm;
