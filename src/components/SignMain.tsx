import React from 'react';
import styles from './SignMain.module.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';


const SignMain: React.FC = () => {
    const amount = useSelector((state: RootState) => state.counter.amount);
    const commission = amount * 0.02;
    const first = useSelector((state: RootState) => state.counter.firstAccount);
    const second = useSelector((state: RootState) => state.counter.secondAccount);
    const third = useSelector((state: RootState) => state.counter.thirdAccount);

	return (
		<div className={styles.homepageMainContainer}>
			<div className={styles.inputFields}>
				<p>{first}</p>
                <p>{second}</p>
                <p>{third}</p>
			</div>

			<div className={styles.fileUploadSection}>

				<div className={styles.commisionCalc}>
					<div>
						<p className={styles.title}>Köçürülən məbləğ</p>
						<p className={styles.amount}>{amount.toFixed(2)}</p>
					</div>
					<p>Kommisiya: {commission.toFixed(2)}  AZN</p>
				</div>

			</div>
		</div>
	);
};

export default SignMain;