
import Image from "next/image";
import Link from "next/link";
import "./footer.css"; // футер CSS
import { head } from "framer-motion/client";

export default function Footer() {
  return (
    <footer className="footer">
        {/* Левая часть */}
        <div className="footer-left">
          <img src="/logo.svg" alt="" className="store-img"/>
            <nav className="footer-links">
                <a href="#">О компании</a>
                <a href="#">Контакты</a>
                <a href="#">Вакансии</a>
                <a href="#">Статьи</a>
                <a href="#">Политика обработки персональных данных</a>
            </nav>
        </div>

        {/* Правая часть */}
        <div className="footer-right">
        <div className="social-icons">
            <img src="/ico-inst.svg" alt="" width={25} height={25}/>
            <img src="/ico-vk.svg" alt="" width={25} height={25}/>
            <img src="/ico-facebook.svg" alt="" width={25} height={25}/>
            <img src="/ico-ok.svg" alt="" width={25} height={25}/>
        </div>
        <div className="contact">
            <img src="/ico-number.svg" alt="" width={25} height={25}/>
            <span>8 800 777 33 33</span>
        </div>
        </div>
</footer>
  );
}
