export default function useLocalStorage() {

  const getLocalStorage = () =>{
  return    JSON.parse(localStorage.getItem(key));;
  }

  const setLocalStorage = () =>{
  return   localStorage.setItem(key, JSON.stringify(array));

  }

const data = {
 getLocalStorage,
 setLocalStorage
}



    return data
}