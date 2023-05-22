export const fetchData = async (name) => {
  const res = await fetch(`http://localhost:9999/services?type=${name}`);
  const data = await res.json();
  return data;
};
