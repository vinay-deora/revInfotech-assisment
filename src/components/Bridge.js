import React from "react";
import BridgeComp1 from "./BridgeComp1";
import BridgeComp2 from "./BridgeComp2";
import Header from "./Header";

const Bridge = () => {
  return (
    <div className="overflow-y-scroll lg:overflow-y-scroll border h-[94h] 5 border-black m-4 rounded-lg  w-[55rem] bg-gray-950">
      <Header />
      <div className="mainContainer   flex flex-col lg:flex-row">
        <div className="box-1  ">
          <BridgeComp1 />
        </div>
        <div className="box-2 ">
          <BridgeComp2 />
        </div>
      </div>
    </div>
  );
};

export default Bridge;
