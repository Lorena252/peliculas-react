export default function useLocalStorage() {

  const getLocalStorage = (key) =>{
  return  JSON.parse(localStorage.getItem(`${key}`));;
  }

  const setLocalStorage = (key, array) =>{
  return  localStorage.setItem(`${key}`, JSON.stringify(array));

  }

const data = {
 getLocalStorage,
 setLocalStorage
}
    return data
}