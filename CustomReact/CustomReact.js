function customReact(reactElement, container){

    // Create an element in DOM
    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.Children;
}




// Basically browser jsx ko understand ni krta wo bs js ko understand krta hai
// islye hum jsx ko js m convert krty hain by using createElement ta k hmara browser jsx ko js smj sky...
// Create Element in React...
const createElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    Children: "Visit Google"
}

const mainContainer = document.querySelector("#root");

// Now inject react in html:

customReact(createElement, mainContainer);