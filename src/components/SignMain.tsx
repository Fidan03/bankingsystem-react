import React from 'react';
import styles from './SignMain.module.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';


const SignMain: React.FC = () => {
    const amount = useSelector((state: RootState) => state.counter.amount);
    const commission = amount * 0.02;
    const account = useSelector((state: RootState) => state.counter.account);

	return (
		<div className={styles.homepageMainContainer}>
			<div className={styles.inputFields}>
				<p>{account}</p>
                <p></p>
                <p></p>
			</div>

			<div className={styles.fileUploadSection}>

				<div className={styles.commisionCalc}>
					<div>
						<p className={styles.title}>Köçürülən məbləğ</p>
						<p className={styles.amount}>{amount}</p>
					</div>
					<p>Kommisiya: {commission}  AZN</p>
				</div>

			</div>
		</div>
	);
};

export default SignMain;