import search from '../assets/Search (1).png'
import bell from '../assets/notification.png'
import styles from '../components/Header.module.scss'

const HeaderLayout = () => {
  return (
    <div className={styles.headerContainer}>
        <div>Ana Səhifə</div>
        <div>
            <div>
                <img src={search} alt="search" />
                <img src={bell} alt="bell" />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default HeaderLayout