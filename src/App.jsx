import { useState, useEffect, useRef } from "react";
import axios from "axios";
import SingleRepository from "./components/SingleRepository/SingleRepository";

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //fetching data and assigning it to the items state
    const asyncStuff = async () => {
      try {
        setIsLoading(true);
        const fetching = await axios.get(
          `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
        );
        setItems((prevState) => [...prevState, ...fetching.data.items]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    asyncStuff();
  }, [page]);

  useEffect(() => {
    //setting up the observer
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  //what will happen when "the load more div" intersect with the viewport
  //we add one to the "page" state
  //that will triger the "fetching data" function inside the useEffect
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevState) => prevState + 1);
      console.log("hi");
    }
  };

  return (
    <div className="App">
      <div className="container">
        {items.map((item, index) => {
          return <SingleRepository key={index} item={item} />;
        })}

        {isLoading && (
          <div>
            <h1 style={{textAlign:"center"}}>loading ......</h1>
          </div>
        )}

        <div ref={loader}></div>
      </div>
    </div>
  );
}

export default App;
