import React from "react";

function DebouncedInput(props) {
  const {
    value: initialValue,
    onChange,
    debounce = 300,
    ...otherProps
  } = props;
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, onChange, debounce]);

  return (
    <div>
      {"Search:   "}
      <input
        {...otherProps}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default DebouncedInput;
