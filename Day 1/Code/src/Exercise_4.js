import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import PromoItem from "./components/PromoItem";
import "./css/App.css";

function App() {
  return (
    <div className="entire-page">
      <NavBar
        nav_item_1={"SERVICES"}
        nav_item_2={"WORK"}
        nav_item_3={"THE TEAM"}
        font_awesome_logo={"fa fa-mobile"}
      ></NavBar>
      <div className="main-content">
        <Header
          header={"SERVICES"}
          mission_statement={`Our vision is simple. We want to create websites and applications with both\n high quality design and easy-to-access content. The finished product will be totally unique and represent awesomeness.`}
        ></Header>
        <div class="promo">
          <PromoItem
            promo_img={"./images/day_1/promo_image_1.png"}
            promo_name={"USER INTERFACE DESIGN"}
            promo_text_1={"WIREFRAMING"}
            promo_text_2={"PROTOTYPING"}
            promo_text_3={"USABILITY TESTING"}
          ></PromoItem>
          <PromoItem
            promo_img={"./images/day_1/promo_image_2.png"}
            promo_name={"CONCEPT AND IDEAS"}
            promo_text_1={"CONCEPTUALIZATION"}
            promo_text_2={"DIGITAL BRANDING"}
            promo_text_3={"PRODUCT STRATEGY"}
          ></PromoItem>
          <PromoItem
            promo_img={"./images/day_1/promo_image_3.png"}
            promo_name={"DESIGN AND BRANDING"}
            promo_text_1={"INTERACTIVE DESIGN"}
            promo_text_2={"GRAPHIC DESIGN"}
            promo_text_3={"IDENTITY DESIGN"}
          ></PromoItem>
        </div>
      </div>
    </div>
  );
}

export default App;
