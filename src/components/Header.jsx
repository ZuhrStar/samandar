/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logoImage/izoflexLogo.png'
import loft from '../assets/headerImages/loft.png'
import loft2 from '../assets/headerImages/icon.png'
import page from '../assets/headerImages/page.png'

const Container = styled.div`
  box-shadow: 0px -50px 22px -1px gray,
              0px 50px 22px 1px gray;
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
`;

const InsideContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 11px;
  background-color: #fff;
  z-index: 1000;

  .between {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    width: 306px;
    color: #7C7C7C;
    text-align: center;
    font-size: 16px;
    line-height: 25px;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
  }

  .navbar {
    display: flex;
    gap: 40px;
    margin-top: 18px;
    margin-right: 20px;
    list-style: none;
  }

  .nav-item {
    text-decoration: none;
    color: black;
    font-size: 15px;
    transition: opacity 0.3s ease;
  }

  .nav-item.active {
    background-color: transparent;
    color: gray;
  }

  .flex2 {
    display: flex;
    align-items: end;
  }

  .flex3 {
    display: flex;
    align-items: end;
    gap: 3px;
  }

  .flex3 span {
    color: gray;
    font-size: 15.5px;
  }

  .phoneNumber {
    margin-left: 20px;
  }

  .phoneNumber span {
    color: gray;
    font-size: 16px;
    cursor: pointer;
  }

  .phoneNumber .red {
    color: red;
    font-size: 29px;
    position: relative;
  }

  .phoneNumber .red::after {
    position: absolute;
    top: 45px;
    left: 70px;
    content: '';
    z-index: 100;
    width: 0px;
    height: 0px;
    transform: rotate(-135deg);
    border-top: 7px solid white;
    border-left: 1px solid white;
    border-right: 7px solid transparent;
  }

`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 58px;
  margin-top: 5px;
  background-color: #32E24D;
  border-bottom: 10px solid #f60a0a;
  padding: 14px 0px 14px 22px;
  z-index: 0;
  position: relative;
  
  .img {
    border: 1px dashed white;
    padding: 7px;
    border-radius: 50px;
  }

  .img2 {
    width: 62px;
    border: 1px dashed white;
    border-radius: 50px;
  }

  .category-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .category-title {
    width: 50px;
    color: white;
    font-size: 13px;
    font-weight: 600;
    line-height: 23px;
  }

  .shadow::after {
    position: absolute;
    top: -1px;
    left: 1082px;
    content: '';
    width: 130px;
    box-shadow: 0px -9px 1px 10px white,
                0px 1px 8px 4px gray;
  }
`

const Header = () => {
  return (
    <>
      <Container>
        <InsideContainer>
          <div className='between'>
            <div className='flex'>
              <p>отражающая тепло, звуко, пароизоляция трубная изоляция, жгут</p>
              <div>
                <ul className='navbar'>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                    >
                      Главная
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                    >
                      О компании
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/production"
                      className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                    >
                      Производство
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                    >
                      Продукция
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                    >
                      Контакты
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className='flex2'>
              <img src={logo} alt="Izoflex Logo" />
              <div className='flex3'>
                <span>Нижний Новгород, ул. Дегтярева, 29 |</span>
                <span>Пн-Чт: 9:00-17:00, Пт: 9:00-15:00 |</span>
                <span><NavLink to="/" style={{textDecoration: "none", color: "gray"}}>email: izoflex@bk.ru</NavLink></span>
                <span className='phoneNumber'>+7 831 <span className='red'>280-84-46</span></span>
              </div>
            </div>
          </div>
        </InsideContainer>
        <Category>
          <div className='category-item'>
            <img src={loft} alt="" className='img' width={58} />
            <p className='category-title'>НОВИНКА Демпферная лента</p>
          </div>
          <div className='category-item'>
            <img src={page} alt="" className='img' width={62} />
            <p className='category-title'>Трубная изоляция Izoflex</p>
          </div>
          <div className='category-item'>
            <img src={loft2} alt="" className='img2' width={100} />
            <p className='category-title'>Отражающая изоляция</p>
          </div>
          <div className='category-item'>
            <img src={loft} alt="" className='img' width={60} />
            <p className='category-title'>ПОДЛОЖКА Вспененный полиэтилен</p>
          </div>
          <div className='category-item'>
            <img src={page} alt="" className='img' width={60} />
            <p className='category-title'>Гидро-, ветро-, паро-изоляция</p>
          </div>
          <div className='category-item'>
            <img src={loft} alt="" className='img' width={60} />
            <p className='category-title'>Изоляционный жгут</p>
          </div>
          <span className='shadow'></span>
        </Category>
      </Container>
    </>
  );
};

export default Header;
