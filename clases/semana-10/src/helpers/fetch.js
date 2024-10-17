export const fetchData = async () => {
  return (await fetch('https://jsonplaceholder.typicode.com/posts/')).json();
};
