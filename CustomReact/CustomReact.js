function customReact(reactElement, container){

    // Create an element in DOM
    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.Children;
    
    // Add attributes to the element(Repetetion exists)
    // domelement.setAttribute('href', createElement.props.href);
    // domelement.setAttribute('target', createElement.props.target);

    // As repetetion exists at above code so, we will use for loop...
    for (const prop in reactElement.props){
        if (prop === 'Children') continue;
        domelement.setAttribute(prop, reactElement.props[prop]);
    }
    
    // Append the element to the container
    container.appendChild(domelement);
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