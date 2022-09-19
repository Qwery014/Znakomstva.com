import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul className="footer__menu-list">
          <li className="footer__menu-item"><a>О нас</a></li>
          <li className="footer__menu-item"><a>Поддержка</a></li>
          <li className="footer__menu-item"><a>Советы</a></li>
          <li className="footer__menu-item"><a>Контакты</a></li>
          <li className="footer__menu-item"><a>Правила оплаты</a></li>
        </ul>
        <div className="footer__rule-link">
          Политика обработки персональных данных
        </div>
        <div className="footer__copyright">© Company 2021</div>
      </div>
    </footer>
  );
};

export default Footer;
