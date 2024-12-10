## Notes Related React:

React is core..

Agy isk 2 parts hain...

i- React DOM -> Use: Aghr tu mjy web applications pr kam krna hai tu...
ii- React Native -> Use: Aghr tu mjy mobile applications pr kam krna hai...

<!-- Two ways to work in React.. -->

<!-- Custom function sy React mai kam krna -->

Custom function k andr hum createElement krtt hain jismai hmry ps object hota hai... and hum custom function ko apna html ka container jismai root id wo pass krty haun..like this:

customReact(createElement, mainContainer);
and customFunction ko hum create krty hain or osmai jo b element create , append etc kam krty hain...

<!-- JSX sy React mai kam krna -->(We do by using this because its easy and fast...)

Ismai hum js k function k andr variables wagaira define krty hain and then onko html mai by using expression evaluatpr inject krdety hain...
and return m function ka nam pass krdety hain... like this:

function App() {
  
  // inject js variables in react...
  const name = "Noor Fatima";
  return (
   <>
  {/*Evaluator Expession kehty hain isko {name}==>means final outcome yani isk andr hum koi conditions wagira ni likh skty wo aghr likhni hain tu oper return sy bhr jahan mrzi likh lain lkin yahan nahi*/}
  {/* consition means {if()} => its not possible...*/}
   <h1>Chai aur React {name} </h1>    

   </>
  )
}

export default App

<!-- Lkin ye dono ways tu hogye lkin aghr m chahti o k custom function k andr jeys createElement kea tha whi kam mai jsx m kron tu wo b krskti o lkin special syntax sy... -->

Like this:

const createElement = React.createElement(
  'a',
  { href: "https://www.google.com", target: "_blank" },
  "Visit the Google",
  anotheruser
  // ab hum isk andr if else nahi likh skty ku k ye evaluated expression hai...
  // if() ===> wrong...
)


Lkin ye tu React.createElement  hai lkin broswer tu js ko understad krta hai react ko ni then?
tu behind the scene ye sara kam hmra compiler babel kryga... isii lye tu hum ye new syntax use kr rye hain ye wala...

const createElement = React.createElement(
  'a',
  { href: "https://www.google.com", target: "_blank" },
  "Visit the Google",
  anotheruser
  // ab hum isk andr if else nahi likh skty ku k ye evaluated expression hai...
  // if() ===> wrong...
)

otherwise custom react m tu hum ye nahu balky ye use krty hain and without react keyword:

const createElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    Children: "Visit Google"
}

<!-- Ab 1 or chez ye hai k custom react k andr hum log custom function ko define krty hain lkin jsx m ni krty ku?? -->
ku k jsx m yehi kam render krta hai and yehi tu mzy ki baat hai....issi lye tu react fst hai...