// Ab main kahani hai inject js in html...ku k at the end react h e jsx...
import "./index.css";

function App() {
  // inject js variables in react...
  const name = "Chai Aur React";
  return (
    <>
      {/*Evaluator Expession kehty hain isko {name}==>means final outcome yani isk andr hum koi conditions wagira ni likh skty wo aghr likhni hain tu oper return sy bhr jahan mrzi likh lain lkin yahan nahi*/}
      {/* consition means {if()} => its not possible...*/}

      <div className="bg-black h-screen w-screen flex justify-center items-center">
        <h1 className="text-6xl underline font-bold text-white">{name}</h1>
      </div>
    </>
  );
}

export default App;
