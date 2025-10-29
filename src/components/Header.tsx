import search from '../assets/Search (1).png'
import bell from '../assets/notification.png'
import styles from '../components/Header.module.scss'
import DropdownMenu from '../components/Dropdown'

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

              <div className={styles.lanuguageDrop}>
                <DropdownMenu/>
              </div>

              {/* <div className={styles.profileDrop}>

              </div> */}

            </div>

        </div>

    </div>
  )
}

export default HeaderLayout