"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import "./main_page.css"

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

useEffect(() => { // запускается при каждом изменении сёрча
  const url = search.trim() 
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}` // апи поиска
    : "https://dummyjson.com/products?limit=30"; // на страницу берёт 30 товаров из апишки

  fetch(url) // запрашивает эти данные
    .then(res => res.json())
    .then(data => setProducts(data.products))
    .catch(err => console.error(err));
}, [search]);

  return (
    <>
      <div className="src_network">
          <span>Главная</span>
          <Image src="/stroke_right.svg" alt="" width={24} height={24} />
          <span style={{ color: "rgb(150, 150, 150)"}}>Поиск</span>
      </div>

      <h1 className="main_page_search_text">Поиск</h1>
      <div className="search-container">
        <input type="text" placeholder="Найти товар" value={search} onChange={(e) => setSearch(e.target.value)} />  {/* обновляю значение сёрч каждое нажатие символа */}
        <Image src="/search.svg" className="search-icon" alt="" width={30} height={30} />
      </div>

      <div className="products-grid">
        {products.map((product) => ( // начало отрисовки карточек
          <div className="product-card" key={product.id}>
            <Link href={`/products/${product.id}`}> {/* При нажатии открывается ссылка с окончанием id */}
              <div className="image-container">
                <img src={product.thumbnail} alt={product.title} className="image-container-img"/> {/* Пикча товара */}
                <span className="discount">-{Math.round(product.discountPercentage)}%</span> {/* Скидка  */}
                <Image src="/favorite.svg" alt="" className="like" width={34} height={34}/> {/* Значек избранного */}
              </div>
            </Link>

            <div className="product-info">
              <div className="prices">
                <div>
                  <div className="products-text price-discount">
                    {Math.round(product.price * (1 - product.discountPercentage / 100))} ₽ {/* Цена с картой + скидка + округление цены   */}
                  </div>
                  <div className="products-text price-sub">С картой</div>
                </div>
                <div>
                  <div className="products-text price-main">{product.price} ₽</div> {/* Цена обычная  */}
                  <div className="products-text price-sub">Обычная</div>
                </div>
              </div>
              <div className="product-text products-text">  
                {product.title} — {product.description.substring(0, 50)}... {/* Описание товара */}
              </div>
              
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => ( // функция рандомного кол-во звёзд 
                  <img key={i} src={i < Math.round(product.rating) ? "/star1.svg" : "/star0.svg"} alt="" />
                ))}
              </div>
              <button className="add-to-cart products-text">В корзину</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}