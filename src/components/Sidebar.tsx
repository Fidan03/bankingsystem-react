import home from '../assets/u_home-alt.png'
import file from '../assets/file-text.png'
import elementPlus from '../assets/element-plus.png'
import card from '../assets/card.png'
import receipt from '../assets/receipt-tax.png'
import moneyBag from '../assets/money-bag (3) 1.png'
import money from '../assets/money.png'
import exchange from '../assets/exchange.png'
import star from '../assets/star.png'
import bookmark from '../assets/Bookmark.png'
import logo from '../assets/azerpoct-az-hor.png'
import styles from './Sidebar.module.scss'
import line from '../assets/line.png'

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
        <div className={styles.logoContainer}>
            <img src={logo} alt="logo" className={styles.logo}/>
        </div>

        <div>
            <img src={line} alt="line" />
        </div>

        <div className={styles.menuList}>
            <ul className={styles.list}>
                <li className={styles.eachItem}>
                    <img src={home} alt="home" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Ana səhifə</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={file} alt="file-text" />
                    <p>Ödəniş tapşırıqları</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={elementPlus} alt="elementPlus" />
                    <p>Ödəniş sistemləri</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={card} alt="card" />
                    <p>Kartlar və hesablar</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={receipt} alt="receipt" />
                    <p>Kreditlər</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={moneyBag} alt="moneyBag" />
                    <p>Əmanətlər</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={money} alt="money" />
                    <p>Əmək haqqı layihəsi</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={exchange} alt="exchange" />
                    <p>Valyuta mübadiləsi</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={star} alt="star" />
                    <p>Ani Ödəniş sistemi</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={bookmark} alt="bookmark" />
                    <p>Şablonlar</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar