import React, { useContext, useEffect,useState} from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealsUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem('fav');
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem('fav'))
  }
  else {
    favorites = []
  }
  return favorites
}
  const [meals,setmeals] = useState([]);
  const [loading,setloading] = useState(false);
  const [searchterm,setsearch] =useState("");
  const [info,setinfo] = useState([]);
  const [favinfo,setfavinfo] = useState(getFavoritesFromLocalStorage());
  const [modal,setmodal] = useState(false);
  const fetchMeals = async (url) => {
    setloading(true);
    try {
      const {data} = await axios(url);
      console.log(data);
      if(data.meals){
      setmeals(data.meals);}
      else setmeals([]);
    } catch (e) {
      console.log(e.response);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchMeals(`${allMealsUrl}${searchterm}`);
  }, [searchterm]);
  
const fetchRandomMeal = () => {
  fetchMeals(randomMealsUrl);
}

  return (
    <AppContext.Provider value={{meals,loading,setsearch,fetchRandomMeal,modal,setmodal,info,setinfo,favinfo,setfavinfo}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
