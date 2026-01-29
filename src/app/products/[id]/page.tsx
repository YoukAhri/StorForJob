"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link"
import "./page_id.css";



// Начало функции для копирования ссылки
function ShareButton() {
const [copied, setCopied] = useState(false);
const handleCopy = () => { 
const url = window.location.href; 
navigator.clipboard.writeText(url).then(() => {
setCopied(true);
setTimeout(() => setCopied(false), 2000);
});
};

return (
    <div>
        <button className="share-btn" onClick={handleCopy} style={{ position: "relative" }}> {/* Кнопка поделиться */}
            <Image src="/share.svg" alt="Поделиться" width={16} height={16} />
            <span>Поделиться</span>
            <span className={`copied-text ${copied ? "show" : ""}`}>Скопировано!</span>
        </button>
    </div>
);
}


// Начало функций слайдера и отзывов
export default function ProductPage() { 
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(0);

  const reviewsCount = Math.min( // Имитация кол-ва отзывов на сайте исходя из айди товара, так как их нету в апи
  100, Math.max(1, Math.pow(Number(id), 5) % 101));
  
useEffect(() => {
  if (!id) return;

  fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(async (data) => {
      setProduct(data);

      const res = await fetch("https://dummyjson.com/products?limit=30");
      const json = await res.json();
      const otherProducts = json.products.filter((p: any) => p.id !== data.id);

      // Вытаскиваю картинки для слайдера
      const sliderImages = [data.thumbnail, ...otherProducts.slice(0, 4).map((p: any) => p.thumbnail)];
      setImages(sliderImages);
      setActiveImage(0);

      // Рандомно выбираем 4 товара для блока "С этим товаром покупают"
      const recommended = otherProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
      setProduct({ ...data, relatedProducts: recommended });
    })
    .catch(err => console.error(err));
}, [id]);
  if (!product) return <div style={{ padding: 40 }}>Загрузка...</div>;  // Если продукта нету, выдаёт надпись загрузка  

const relatedProducts: any[] = product?.relatedProducts || [];
  
  return (
<>
    <div className="src_network"> {/* Визуальный путь сайта  */}
        <span>Главная</span>
        <Image src="/stroke_right.svg" alt="" width={16} height={16} />
        <span>Каталог</span>
        <Image src="/stroke_right.svg" alt="" width={16} height={16} />
        <span>Карточка товара</span>
        <Image src="/stroke_right.svg" alt="" width={16} height={16} />
        <span style={{ color: "rgb(150, 150, 150)"}}> {product.title} </span>
    </div>

    <h1 className="main_page_search_text">{product.title}</h1> {/* Название товара */} 

    <div className="info_block_1" style={{ display: "flex", gap: "20px"}}> {/* Блок с артикулом товара, отзывами, кнопкой поделиться */}

        <span> Арт. {product.id + "001234"} </span>  {/* Импровизированный артикул, ID + цифры */}

        <div className="rating"> 
            {Array.from({ length: 5 }).map((_, i) => ( // функция рандомного кол-во звёзд 
                <img key={i} src={i < Math.round(product.rating) ? "/star1.svg" : "/star0.svg"} alt="" width={15} height={15}/>
            ))}
        </div>
 
        <span> {reviewsCount} отзывов </span>  {/* имитация кол-ва отзывов на сайте */}
        <ShareButton /> {/* Интерактивная кнопка поделиться */}
        <div className="info-block-func" >
            <Image src="/favorite.svg" alt="" width={16} height={16} />
            <span> В избранное </span>
        </div> 
    </div>



    <div className="product-page" style={{ display: "flex", gap: 20, paddingRight: "100px" }}> {/* Блок интеракции с товаром */}

      {/* Мини картинки слева */}
      <div className="thumbnails-column" style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        {images.map((img, index) => (
          <img key={index} className="mini-image" src={img} alt="мини картинка товара" width={70} height={70} style={{ border: index === activeImage ? "1px solid #082d00" : "0px" }}
            onClick={() => setActiveImage(index)} />
        ))}
      </div>

      {/* Основная пикча */}
      <div className="main-image">
        <img src={images[activeImage]} width={400} height={400} alt="картинка товара" style={{ objectFit: "contain" }} />
      </div>

      {/* Информация о товаре */}
      <div className="product-info" style={{paddingLeft: "60px"}} >
         <div className="prices1" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div> 
              <div className="products-text1 price-main1">{product.price} ₽</div> {/* Обычная цена */}
              <div className="products-text1 price-sub1">Обычная цена</div>
            </div>

            <div>
              <div className="products-text1 price-discount1">
                {Math.round(product.price * (1 - product.discountPercentage / 100))} ₽ {/* Цена с учетом скидки */}
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <div className="products-text1 price-sub1">С картой магазина</div>
                <img src="/info.svg" alt="" />
              </div>
            </div>
          </div>


        <div className="info">
                <button className="button_basket" style={{marginTop: "15px"}} > {/* Кнопка добавления в корзину */}
                  <img src="/basket0.svg" alt="" width={40} height={40} style={{ margin: "auto 0"}} /> 
                  <span className="" style={{margin: "auto auto"}}> В корзину</span>
                </button>

                <div className="bonus">
                  <img src="/smile.svg" alt="" />
                  <span> Вы получаете 10 бонусов </span>
                </div>
                <div className="price-notification">
                  <img src="/bell-off.svg" alt="" />
                  <span> Уведомить о снижении цены </span>
                </div>

                <div className="product-specs">
                  <div className="spec-row">
                    <div className="spec-left">Бренд</div>
                    <div className="spec-right">{product.brand}</div>
                  </div>
                  <div className="spec-row">
                    <div className="spec-left">Категория</div>
                    <div className="spec-right">{product.category}</div>
                  </div>
                  <div className="spec-row">
                    <div className="spec-left">Колличество</div>
                    <div className="spec-right">{product.stock}</div>
                  </div>
                </div>
        </div>
      </div>
    </div>
        <h1 className="main_page_search_text" style={{paddingTop: "100px"}}>С этим товаром покупают</h1>



  <div className="products-grid"> {/* Блок с дополнительными товарами для покупки */}
  {relatedProducts.map((p) => (
    <div className="product-card" key={p.id}>

      <Link href={`/products/${p.id}`}> {/* Кликабельная картинка товара */}
        <div className="image-container">
          <img src={p.thumbnail} alt={p.title} className="image-container-img" />
          <span className="discount">-{Math.round(p.discountPercentage)}%</span>
          <Image src="/favorite.svg" alt="" className="like" width={34} height={34} />
        </div>
      </Link>


      <div className="product-info">
        <div className="prices">
          <div>
            <div className="products-text price-discount">
              {Math.round(p.price * (1 - p.discountPercentage / 100))} ₽ {/* Скидка на товар */}
            </div>
            <div className="products-text price-sub">С картой</div>
          </div>
          <div>
            <div className="products-text price-main">{p.price} ₽</div> {/* Обычная цена */}
            <div className="products-text price-sub">Обычная</div>
          </div>
        </div> 
        <div className="product-text products-text">{p.title} — {p.description?.substring(0, 50)}...</div> {/* Краткое описание товара */}


        <div className="rating">
          {Array.from({ length: 5 }).map((_, i) => ( // Кол-во звёзд на товаре
            <img key={i} src={i < Math.round(p.rating) ? "/star1.svg" : "/star0.svg"} alt="" />
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





