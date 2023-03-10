import React from "react";
import "./index.scss";

interface NavToDivPropsType {
  executeScroll(ref: React.RefObject<HTMLDivElement>): void,
  bodyRecordRef: React.RefObject<HTMLDivElement>,
  myExercise: React.RefObject<HTMLDivElement>,
  mydiaryRef: React.RefObject<HTMLDivElement>,
}

const NavToDiv = ({
  executeScroll,
  bodyRecordRef,
  myExercise,
  mydiaryRef
} : NavToDivPropsType) => {
  const navItems = [
    {
      id: 1,
      image: "/img/MyRecommend-1.jpg",
      title: "BODY RECORD",
      subTitle: "自分のカラダの記録",
      ref: bodyRecordRef
    },
    {
      id: 2,
      image: "/img/MyRecommend-2.jpg",
      title: "MY EXERCISE",
      subTitle: "自分の運動の記録",
      ref: myExercise
    },
    {
      id: 1,
      image: "/img/MyRecommend-3.jpg",
      title: "MY DIARY",
      subTitle: "自分の日記",
      ref: mydiaryRef
    }
  ]
  return (
    <div className="nav-to-div">
      <div className="nav-to-div-inner d-flex justify-content-between">
        {navItems.map(item => (
          <div className="nav-item" key={item.id} onClick={() => executeScroll(item.ref)}>
            <img src={item.image} alt={item.title} className="nav-item-img" />
            <div className="nav-item-inner d-flex flex-column align-items-center justify-content-center">
              <h3 className="nav-item-title">{item.title}</h3>
              <span className="nav-item-sub-title">{item.subTitle}</span>
            </div>
            <div className="mask"></div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default NavToDiv;
