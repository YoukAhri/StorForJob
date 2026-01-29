
import Image from "next/image";
import Link from "next/link";
import "./navbar.css"; // навбар CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="nav-left">  {/* Левая часть навбара */}
          <img src="/logo.svg" alt="" className="store-img"/>
        <Link href="/catalog" className="catalog-button">
          <Image src="/menu.svg" alt="Каталог" width={35} height={35} />
          <span className="catalog-text-button">Каталог</span>
        </Link>
      </div>

      <div className="nav-right">  {/* Правая часть навбара */}
        <Link href="/favorites" className="nav-item">
          <Image src="/favorite.svg" alt="Избранное" width={30} height={30} />
          <span>Избранное</span>
        </Link>
        <Link href="/orders" className="nav-item">
          <Image src="/orders.svg" alt="Заказы" width={30} height={30} />
          <span>Заказы</span>
        </Link>
        <Link href="/cart" className="nav-item">
          <Image src="/basket.svg" alt="Корзина" width={30} height={30} />
          <span>Корзина</span>
        </Link>

        <div className="user-profile">
          <Image src="/avatar.png" alt="Аватар" width={55} height={55} className="avatar" />
          <span className="username">Алексей</span>
          <Image src="/stroke_under.svg" alt="Стрелка вниз" width={55} height={55}/>
        </div>
      </div>
    </nav>
  );
}
