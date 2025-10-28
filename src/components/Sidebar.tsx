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

        <div className={styles.line}>
            <img src={line} alt="line" />
        </div>

        <div className={styles.menuList}>
            <ul className={styles.list}>
                <li className={styles.eachItem}>
                    <img src={home} alt="home" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Ana səhifə</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={file} alt="file-text" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Ödəniş tapşırıqları</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={elementPlus} alt="elementPlus" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Ödəniş sistemləri</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={card} alt="card" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Kartlar və hesablar</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={receipt} alt="receipt" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Kreditlər</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={moneyBag} alt="moneyBag" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Əmanətlər</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={money} alt="money" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Əmək haqqı layihəsi</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={exchange} alt="exchange" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Valyuta mübadiləsi</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={star} alt="star" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Ani Ödəniş sistemi</p>
                </li>
                <li className={styles.eachItem}>
                    <img src={bookmark} alt="bookmark" className={styles.menuImg}/>
                    <p className={styles.menuTitle}>Şablonlar</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar