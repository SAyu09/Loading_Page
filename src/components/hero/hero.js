import styles from './hero.module.css'
import boy from '../../images/boy2.svg'
import ToggleSwitch from '../toggle/toglge'
import CustomBtn from '../button/button'
import vector from '../../images/Vector.png'
import users from '../../images/users.svg'
import shape from '../../images/Shape.svg'
import shape2 from '../../images/Shape-2.svg'

export default function HeroSection () {
    return (
        <section className={styles.secStyle}>
            <div className={styles.leftSec}>
                <p>Unlock Global</p>
                <div className={styles.switchWrapper}>
                    <p>Growth</p>
                    <ToggleSwitch/>
                </div>
                <div className={styles.contentWrap}>
                    <div className={styles.empty}></div>
                    <div className={styles.containt}>
                        Your Gateway to Seamless Multilingual Onboarding on E-Commerce Platforms.
                    </div>
                </div>
                <div className={styles.container}>
                    <p>#01</p>
                    <CustomBtn customStyle = {styles.btnStyle} btnText='Try Now For Free' isArrow/>
                    <img src={vector} alt='fds'/>

                </div>
                <div className={styles.usersWrap}>
                    <img src={users} alt=''/>
                    <div className={styles.growthInfo}>
                        <p>12.5%</p>
                        <p>Groth on hits</p>
                    </div>

                </div>
            </div>
            <div className={styles.rightSec}>
                <img src = {boy} alt=''/>
                <img src = {shape} className={styles.shapeOne} alt=''/>
                <img src = {shape2} className={styles.shapeTwo} alt=''/>
            </div>
        </section>
    )
}