import React from "react";
import CustomStyle from "../../assets/styles/layout.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <strong>
        Copyright &copy; 2021&nbsp;
        <a href="https://www.loyalto.id/">loyalto.id</a>.
      </strong>
      All rights reserved.
    </footer>
  );
};

export default Footer;
