import React, { Children, useState } from "react";
import classes from "./CompoundComponents.module.css";

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const tabElements = React.Children.toArray(Children)
  
  return (
    <div className={classes.Tabs}>

    </div>
  );
};

export default Tabs;
