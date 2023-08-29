import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          university: "red",
          isAccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı adınızı giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen Üniversitenizi seçiniz"
            >
              <option value="">Lütfen Üniversitenizi seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtu">Orta Doğu Teknik Üniversitesi</option>
              <option value="itu">İstanbul Teknik Üniversitesi</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link to="/" className="formLink">Ana Forma Git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
