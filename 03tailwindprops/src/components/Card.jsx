import React from "react";

// function cards(props) {
  // console.log("props", props);
  // and next jesa k meny channel m username likha hai tu i will access username like this:
  // console.log(props.username);
  
  // Ab ye oper meny props sy username ko access kea hai ..react k andr props by default hai tu m osk bagair b access krskti o like this:
  //lkin essy mjy destructuring krk krna pryga...
  function cards({username}){
    console.log(username);
    
  return (
    <div>
      <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img
            class="h-full w-full rounded"
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png"
            alt="profile-picture"
          />
        </div>
        <div class="p-6 text-center">
          <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Natalie Paisley
          </h4>
          <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            CEO / Co-Founder
          </p>
        </div>
        <div class="flex justify-center gap-7 p-6 pt-2">
          <a
            href="#facebook"
            class="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i class="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            class="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            class="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="w-full pt-5 px-4 mb-8 mx-auto ">
        <div class="text-sm text-gray-700 py-1">
          Made with{" "}
          <a
            class="text-gray-700 font-semibold"
            href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents"
            target="_blank"
          >
            Material Tailwind
          </a>{" "}
          by{" "}
          <a
            href="https://www.creative-tim.com?ref=tailwindcomponents"
            class="text-gray-700 font-semibold"
            target="_blank"
          >
            {" "}
            Creative Tim
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default cards;
