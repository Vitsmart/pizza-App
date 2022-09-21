import React from "react";
import Bookitem from "./components/Bookitem";

// const products = fetch("https://swapi.dev/api/films/")
// .then(response => response.json())
// .then(json => console.log(json))

const Dproducts = [
    {
    id: 'B1',
    title: 'Facilities maintenance Course',
    price: 35,
    description: 'Service delivery tips by Dickson Dizon'
  },
  {
    id: 'B2',
    title: 'React js programming made easy',
    price: 50,
    description: 'Typescript and NextJs in React projects by Munachi Davis'
  },
  {
    id: 'B3',
    title: 'React js Basics',
    price: 42,
    description: 'React Concepts and Projects made easy by Vitalis Noble'
  },
  {
    id: 'B4',
    title: 'Fullstack programming',
    price: 55,
    description: 'Become a pro in Frontend and Backend management by Smart Cornels'
  },
  {
    id: 'B5',
    title: 'Life inspiration',
    price: 33,
    description: 'The Power of Determination by Vitalis Noble'
  },
  ];
  

const Books = () => {
return (
    <section className="products">
        <h2>check your favourite Course</h2>
        <ul>
            {Dproducts.map((product) => (
<Bookitem 
key={product.id}
id={product.id}
  title={product.title}
  price={product.price}
  description={product.description}
/>


            )

            )}
        </ul>
    </section>
)
    
};


export default Books;