import React from "react";
const App = () => {
  const handleDoubleClick = (event) => {
    // switch (event.detail) {
    //   case 1:
    //     console.log("I was double clicked");
    //     break;
    //   case 2:
    //     console.log("I was not double clicked");
    //     break;
    //   default:
    //     return;
    // }
    if(event.detail === 2){
      console.log("I was double clicked");

    }
    else{
      console.log("I was not double clicked");
    }
  };
  return (
    <div id="main">
      <button id="dblclick-btn" onClick={handleDoubleClick}>
        Double click me
      </button>
    </div>
  );
};

export default App;
