const FormLabels = (props) => {
  const onChangeHandler = (e) => {
    props.setFunc(e.target.value);
  };
  return (
    <label htmlFor={props.id}>
      {props.name}
      <select
        id={props.id}
        value={props.value}
        onChange={onChangeHandler}
        onBlur={onChangeHandler}
      >
        <option />

        {props.list.map((item) => (
          <option key={item} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
};

export default FormLabels;
