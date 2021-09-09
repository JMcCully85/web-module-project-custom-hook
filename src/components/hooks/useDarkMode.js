import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initValues) => {
  const [values, setValues] = useLocalStorage(key, initValues);
  return [values, setValues];
};
export default useDarkMode;
