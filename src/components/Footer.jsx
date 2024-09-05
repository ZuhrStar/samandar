/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
`;

const Div = styled.div`
  background-color: #213540;
    box-shadow: 0px 35px 30px 10px gray;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 60px;
`

const Div2 = styled.div`
  background-color: #1C2D36;
  box-shadow: 0px 35px 30px 10px gray;
  padding: 40px 80px 20px 80px;
  width: 100%;
  margin: 0 auto;

  .footer {
    display: flex;
    justify-content: space-between;

    .material {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h3 {
        font-size: 22px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: white;
      }

      .material-item {
        display: flex;
        flex-direction: column;
        width: 350px;
        gap: 18px;

        .link {
          font-size: 16px;
          text-decoration: none;
          font-weight: 300;
          color: gray;
          text-transform: uppercase;
        }

          .link:hover {
          color: #19D62F;
        }
      }
    }

    .komplekt {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h3 {
        font-size: 22px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: white;
      }

      .komplekt-item {
        display: flex;
        flex-direction: column;
        width: 350px;
        gap: 18px;

        .link {
          font-size: 16px;
          text-decoration: none;
          font-weight: 300;
          color: gray;
          text-transform: uppercase;
        }

        .link:hover {
          color: #19D62F;
        }
      }
    }

    .contact {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h3 {
        font-size: 22px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: white;
      }

      .contact-item {
        display: flex;
        flex-direction: column;
        width: 350px;
        gap: 18px;

        .address {
          font-size: 16px;
          font-weight: 100;
          text-decoration: none;
          font-weight: 300;
          color: gray;
          text-transform: uppercase;
        }

        .phone {
          font-size: 16px;
          font-weight: 100;
          text-decoration: none;
          font-weight: 300;
          color: gray;
          text-transform: uppercase;
        }

        .phone:hover {
          color: #19D62F;
        }

        .email {
          font-size: 16px;
          font-weight: 100;
          text-decoration: none;
          font-weight: 300;
          color: gray;
          text-transform: uppercase;
        }

        .email:hover {
          color: #19D62F;
        }
      }
    }
  }
    .footer-end {
      margin: 30px 0px 10px 0px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 8px;

      p {
        font-size: 14px;
        color: white;
      }

      .hover-text {
        font-size: 14px;
        color: #19D62F;
      }

      .hover-text:hover {
        color: #000;
      }
    }
`

function Footer() {
  return (
    <>
      <Container>
        <Div>
          <YMaps query={{ apikey: 'https://api-maps.yandex.ru/2.0/?coordorder=longlat&load=package.full&lang=ru-RU' }}>
            <div>
              <Map
                defaultState={{ center: [41.2995, 69.2401], zoom: 10 }}
                width={1170} height={550}
              >
                <Placemark geometry={[41.2995, 69.2401]} />
              </Map>
            </div>
          </YMaps>
        </Div>
        <Div2>
          <div className='footer'>
            <div className='material'>
              <h3>Материалы</h3>
              <div className='material-item'>
                <p><NavLink to="/" className="link">НОВИНКА Демпферная лента</NavLink></p>
                <p><NavLink to="/" className="link">Ветро-влагозащитная мембрана</NavLink></p>
                <p><NavLink to="/" className="link">Пароизоляция</NavLink></p>
                <p><NavLink to="/" className="link">Гидро-пароизоляция</NavLink></p>
                <p><NavLink to="/" className="link">Изоляция отражающая (Лавсан)</NavLink></p>
                <p><NavLink to="/" className="link">Изоляция отражающая (Фольга)</NavLink></p>
                <p><NavLink to="/" className="link">Пенополиэтилен</NavLink></p>
                <p><NavLink to="/" className="link">Жгут теплоизоляционный «Вилатерм»</NavLink></p>
                <p><NavLink to="/" className="link">НОВИНКА Демпферная лента</NavLink></p>
                <p><NavLink to="/" className="link">Изоляция для труб</NavLink></p>
              </div>
            </div>
            <div className='komplekt'>
              <h3>Комплектующие</h3>
              <div className='komplekt-item'>
                <p><NavLink to="/" className="link">Фольгированный скотч</NavLink></p>
                <p><NavLink to="/" className="link">Металлизированный скотч</NavLink></p>
                <p><NavLink to="/" className="link">Армированный скотч</NavLink></p>
                <p><NavLink to="/" className="link">Фольга для бани</NavLink></p>
              </div>
            </div>
            <div className='contact'>
              <h3>Контакты</h3>
              <div className='contact-item'>
                <p className='address'>603142, Нижегородская область, Нижний Новгород, ул. Дегтярева, 29</p>
                <p><NavLink to="/" className="phone">+7 831 280-84-46</NavLink></p>
                <p><NavLink to="/" className="email">Email: izoflex@bk.ru</NavLink></p>
              </div>
            </div>
          </div>
          <div className='footer-end'>
            <p>© 2014 - 2024 Производственная компания ООО Изофлекс.</p>
            <p className='hover-text'>Политика конфиденциальности</p>
          </div>
        </Div2>
      </Container>
    </>
  )
}

export default Footer