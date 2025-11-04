import React from 'react';
import { Input } from 'antd';
import styles from './SignMain.module.scss';


const SignMain: React.FC = () => {

	return (
		<div className={styles.homepageMainContainer}>
			<div className={styles.inputFields}>
				<Input placeholder="Ödənişin təyinatı" style={{ width: 455, height: 56 }} />
                <Input placeholder="Ödənişin təyinatı" style={{ width: 455, height: 56 }} />
                <Input placeholder="Ödənişin təyinatı" style={{ width: 455, height: 56 }} />
			</div>

			<div className={styles.fileUploadSection}>

				<div className={styles.commisionCalc}>
					<div>
						<p className={styles.title}>Köçürülən məbləğ</p>
						<p className={styles.amount}>smth</p>
					</div>
					<p>Kommisiya: smth  AZN</p>
				</div>

			</div>
		</div>
	);
};

export default SignMain;