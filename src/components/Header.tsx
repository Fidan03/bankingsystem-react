import search from '../assets/Search (1).png'
import bell from '../assets/notification.png'
import styles from '../components/Header.module.scss'
import downArrow from '../assets/chevron-down.png'

const HeaderLayout = () => {
  return (
    <div className={styles.headerContainer}>

        <div className={styles.pageName}>
          <p className={styles.title}>Ana Səhifə</p>
        </div>

        <div className={styles.icons}>

            <div className={styles.searchAndNotify}>
                <img src={search} alt="search" className={styles.search}/>
                <img src={bell} alt="bell" className={styles.bell}/>
            </div>

            <div className={styles.dropdown}>

              <div className={styles.lanuguage}>
                <ul className={styles.languageOptions}>
                  <li>AZE</li>
                  <li>EN</li>
                  <li>RU</li>
                </ul>
                <img src={downArrow} alt="downArrow" className={styles.downArrow}/>
              </div>

              <div className={styles.profile}>
                <ul>
                  <li>Quluzadə Vahid Aydın oğlu</li>
                  <li>Birinci imza hüququ</li>
                </ul>
                <img src={downArrow} alt="downArrow" className={styles.downArrow}/>
              </div>

            </div>

        </div>

    </div>
  )
}

export default HeaderLayout