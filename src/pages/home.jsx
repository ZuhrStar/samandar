/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import { IoVolumeHigh } from "react-icons/io5";
import { BsFillUmbrellaFill } from "react-icons/bs";
import { SiTarget } from "react-icons/si";
import { FaCircle } from "react-icons/fa";


const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 35px 25px 1px gray;
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
`

const InsideContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;

  p {
    width: 320px;
    color: #7C7C7C;
    text-align: center;
    font-size: 16px;
    padding-bottom: 10px;
    line-height: 25px;
  }
  
  img {
    padding-left: 200px;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
  }

  .volume {
    width: 292.5px;
    height: 260px;
    text-align: center;
    padding-top: 10px;
    color: white;
    background-color: #00D555FF;
  }

  .umbrella {
    width: 292.5px;
    height: 260px;
    text-align: center;
    padding-top: 10px;
    font-size: 10px;
    color: white;
    background-color: #20E15DF0;
  }

  .target {
    width: 292.5px;
    height: 260px;
    text-align: center;
    padding-top: 10px;
    font-size: 10px;
    color: white;
    background-color: #00D555FF;
  }

  .circle {
    width: 292.5px;
    height: 260px;
    text-align: center;
    padding-top: 10px;
    font-size: 10px;
    color: white;
    background-color: #20E15DF0;
  }

  .volume-text {
    margin-top: 14px;
  }

  .volume-text h3 {
    font-weight: 500;
    font-size: 22px;
  }

  .volume-text p {
    font-size: 14px;
    width: 200px;
    margin: 0 auto;
    line-height: 22px;
    color: black;
  }

  .umbrella-text {
    margin-top: 15px;
  }

  .umbrella-text h3 {
    font-weight: 500;
    font-size: 22px;
  }

  .umbrella-text p {
    font-size: 14px;
    width: 250px;
    margin: 0 auto;
    line-height: 22px;
    color: black;
  }

  .target-text {
    margin-top: 15px;
  }

  .target-text h3 {
    font-weight: 500;
    font-size: 22px;
  }

  .target-text p {
    font-size: 14px;
    width: 200px;
    margin: 0 auto;
    line-height: 22px;
    color: black;
  }

  .circle-text {
    margin-top: 12px;
  }

  .circle-text h3 {
    font-weight: 500;
    font-size: 22px;
  }

  .circle-text p {
    font-size: 14px;
    width: 250px;
    padding-top: 5px;
    margin: 0 auto;
    line-height: 20px;
    color: black;
  }

  .volume-btn {
    margin-top: 8px;
    font-size: 16px;
    color: white;
    padding: 5px 10px 10px 10px;
    border: none;
    border: 4px solid white;
    background-color: transparent; 
  }

  .umbrella-btn {
    margin-top: 8px;
    font-size: 16px;
    color: white;
    padding: 5px 10px 10px 10px;
    border: none;
    border: 4px solid white;
    background-color: transparent;
  }

  .target-btn {
    margin-top: 8px;
    font-size: 16px;
    color: white;
    padding: 5px 10px 10px 10px;
    border: none;
    border: 4px solid white;
    background-color: transparent;
  }

  .circle-btn {
    margin-top: 8px;
    font-size: 16px;
    color: white;
    padding: 5px 10px 10px 10px;
    border: none;
    border: 4px solid white;
    background-color: transparent;
  }

  .item-icon:nth-child(even) {
    font-size: 90px;
    text-align: center;
    color: white;
  }

  .item-icon:nth-child(odd) {
    font-size: 90px;
    text-align: center;
    color: white;
  }

  .product-title {
    border-left: 3px solid #20E15DF0;
    font-size: 25px;
    font-weight: 300;
    padding-left: 8px;
  }

  .product-desc {
    margin-top: 20px;
    text-align: start;
    line-height: 20px;
    padding: 0px 20px 15px 0px;
    width: 1170px;
    font-size: 14px;
    color: #20E15DF0;
    border-bottom: 5px solid #00D555FF;
  }

  .product-cards {
    padding: 40px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }

  .card:group {
    text-align: center;
    width: 373px;
  }

  .img1 {
    width: 373px;
    height: 376px;
    background-color: gray;
    transition: all 0.3s ease;
  }

  .card2-title {
    font-size: 18px;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    margin-top: 50px;
    padding-bottom: 250px;
  }

  .items-item {
    width: 550px;
    display: flex;
    gap: 20px;
    padding-bottom: 40px;
    border-bottom: 1px solid #E3E3E3;
  }

  .items-text h4 {
    font-size: 20px;
    font-weight: 300;
    color: gray;
    padding-bottom: 10px;
  }

  .items-text p {
    font-size: 14px;
    text-align: start;
    color: gray;
    width: 405px;
  }

  .items-img {
    width: 90px;
    height: 90px;
    background-color: gray;
  }

`

function Home() {
  return (
    <>
      <Container>
        <InsideContainer>
          <div className='flex'>
            <div className='volume'>
              <div className='item-icon'><IoVolumeHigh /></div>
              <div className='volume-text'>
                <h3>Тепло-шумоизоляция</h3>
                <p>универсальная строительная изоляция</p>
              </div>
              <button className='volume-btn'>Подробнее</button>
            </div>
            <div className='umbrella'>
              <div className='item-icon'><BsFillUmbrellaFill /></div>
              <div className='umbrella-text'>
                <h3>Ветро-пароизоляция</h3>
                <p>надежная изоляция кровельных, стеновых конструкций</p>
              </div>
              <button className='umbrella-btn'>Подробнее</button>
            </div>
            <div className='target'>
              <div className='item-icon'><SiTarget /></div>
              <div className='target-text'>
                <h3>Изоляция для труб</h3>
                <p>тепло-шумоизоляция для труб различных диаметров</p>
              </div>
              <button className='target-btn'>Подробнее</button>
            </div>
            <div className='circle'>
              <div className='item-icon'><FaCircle /></div>
              <div className='circle-text'>
                <h3>Вилатерм жгут</h3>
                <p>изоляция межпанельных швов, дверных и оконных блоков</p>
              </div>
              <button className='circle-btn'>Подробнее</button>
            </div>
          </div>

          <div className='products'>
            <div>
              <h3 className='product-title'>Продукция производственной компании IZOFLEX</h3>
              <p className='product-desc'>Официальный каталог изоляции из вспененного полиэтилена изготавливаемой производственной компанией Izoflex в Нижнем Новгороде. Приобретайте гидроизоляцию по заводской цене с доставкой по всей России.</p>
            </div>

            <div className='product-cards'>
              <div className="card">
                <div className='img1'><button className='hover-btn'>Подробнее</button></div>
                <div>
                  <h2 className='card2-title'>Отражающая изоляция</h2>
                  <p className='card1-desc'>Служит для снижения тепловых потерь.</p>
                </div>
              </div>
              <div className="card">
                <div className='img1'></div>
                <div>
                  <h2 className='card2-title'>Отражающая изоляция</h2>
                  <p className='card1-desc'>Служит для снижения тепловых потерь.</p>
                </div>
              </div>
              <div className="card">
                <div className='img1'></div>
                <div>
                  <h2 className='card2-title'>Отражающая изоляция</h2>
                  <p className='card1-desc'>Служит для снижения тепловых потерь.</p>
                </div>
              </div>
              <div className="card">
                <div className='img1'></div>
                <div>
                  <h2 className='card2-title'>Отражающая изоляция</h2>
                  <p className='card1-desc'>Служит для снижения тепловых потерь.</p>
                </div>
              </div>
              <div className="card">
                <div className='img1'></div>
                <div>
                  <h2 className='card2-title'>Отражающая изоляция</h2>
                  <p className='card1-desc'>Служит для снижения тепловых потерь.</p>
                </div>
              </div>
              <div className="card">
                <div className='img1'></div>
                <div>
                  <h2 className='card2-title'>Отражающая изоляция</h2>
                  <p className='card1-desc'>Служит для снижения тепловых потерь.</p>
                </div>
              </div>
              <div className="card">
                <div className='img1'></div>
                <div>
                  <h2 className='card2-title'>Отражающая изоляция</h2>
                  <p className='card1-desc'>Служит для снижения тепловых потерь.</p>
                </div>
              </div>
            </div>

            <div className='items'>
              <div className='items-item'>
                <div className='items-img'></div>
                <div className='items-text'>
                  <h4>Время нагрева пола</h4>
                  <p>Изоляция IZOFLEX позволяет сохранить тепло пола от помещения, защищая от холода бетонных перекрытий.</p>
                </div>
              </div>
              <div className='items-item'>
                <div className='items-img'></div>
                <div className='items-text'>
                  <h4>Длительные нагрузки</h4>
                  <p>Материал выдерживает длительную нагрузку на поверхность</p>
                </div>
              </div>
              <div className='items-item'>
                <div className='items-img'></div>
                <div className='items-text'>
                  <h4>ВЭкономия</h4>
                  <p>Материалы Izoflex сохраняют тепло и соответственно экономят энергозатраты</p>
                </div>
              </div>
              <div className='items-item'>
                <div className='items-img'></div>
                <div className='items-text'>
                  <h4>Увеличение теплоотдачи</h4>
                  <p>Теплый пол - теплее в помещении.</p>
                </div>
              </div>
              <div className='items-item'>
                <div className='items-img'></div>
                <div className='items-text'>
                  <h4>Время нагрева</h4>
                  <p>Утепленные помещения быстрее нагреваются.</p>
                </div>
              </div>
              <div className='items-item'>
                <div className='items-img'></div>
                <div className='items-text'>
                  <h4>Экологично</h4>
                  <p>Материалы Izoflex - экологически чистые материалы</p>
                </div>
              </div>
            </div>
          </div>
        </InsideContainer>
      </Container>
    </>
  )
}

export default Home