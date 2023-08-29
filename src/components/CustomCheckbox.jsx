import { useField } from "formik";

// eslint-disable-next-line react/prop-types
function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="checkbox">
        <label>{label}</label>
        <input
          type="text"
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <span>Kullanım koşullarını kabul ediyorum</span>
      </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;
