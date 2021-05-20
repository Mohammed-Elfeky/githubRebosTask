As a User I should be able to keep scrolling and new results should appear:

for that:

-i used the Intersection Observer API i put a loader div with a ref  inside the div where i map the repos 
-whenever the loader div intersects with the viewport the Observer handler function triggers 
-inside the Observer handler function i change the page state 
-i use the page state as a dependacy for useEffect 
-whenever the page state changes i fetch the next page end point
-and add the result array to the previous array in the repos state 


-i used CSS Modules Stylesheet for styling 

-i used the numeral library to format the  stars number

-i used the moment library to format the tome interval 
