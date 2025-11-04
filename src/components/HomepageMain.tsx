import React from 'react';
import { Select, Space, Input, Button, Flex, message, Upload, ConfigProvider } from 'antd';
import type { UploadProps } from 'antd';
import { useResponsive } from 'antd-style';
import styles from './HomepageMain.module.scss';
import fileBookmark from '../assets/u_file-bookmark-alt 1.png'
import bookmark from '../assets/fi_bookmark.png'
import { useDispatch, useSelector } from 'react-redux';
import { setAmount } from '../redux/count';
import type { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';

const handleChange = (value: string) => {
	console.log(`selected ${value}`);
};

const props: UploadProps = {
	name: 'file',
	action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

const HomepageMain: React.FC = () => {
	const { xxl } = useResponsive();

	const dispatch = useDispatch();
	const amount = useSelector((state: RootState) => state.counter.amount);   //read's data from redux store
	const commission = amount * 0.02;  //calculation of commission
	const totalWithCommission = amount * 0.98;   //calculation of total

	const navigate = useNavigate();

	return (
		<div className={styles.homepageMainContainer}>
			<div className={styles.inputFields}>
				<Space wrap>
					<div className={styles.dropdowns}>
						<Select
							defaultValue="Məxaric hesabı"
							style={{ width: 455 }}
							onChange={handleChange}
							options={[
								{ value: 'Məxaric hesabı', label: 'Məxaric hesabı' },
								{ value: 'lucy', label: 'Lucy' },
								{ value: 'Yiminghe', label: 'Yiminghe' },
							]}
						/>

						<Select
							defaultValue="Alan hesabın nömrəsi"
							style={{ width: 455 }}
							onChange={handleChange}
							options={[
								{ value: 'Alan hesabın nömrəsi', label: 'Alan hesabın nömrəsi' },
								{ value: 'lucy', label: 'Lucy' },
								{ value: 'Yiminghe', label: 'Yiminghe' },
							]}
						/>

						<Select
							defaultValue="Komissiyanın məxaric hesabı"
							style={{ width: 455 }}
							onChange={handleChange}
							options={[
								{ value: 'Komissiyanın məxaric hesabı', label: 'Komissiyanın məxaric hesabı' },
								{ value: 'lucy', label: 'Lucy' },
								{ value: 'Yiminghe', label: 'Yiminghe' },
							]}
						/>
					</div>
				</Space>

				<Input
					placeholder="Məbləğ"
					style={{ width: 455, height: 56 }}
					value={amount || ''}
					onChange={(e) => {
						const value = Number(e.target.value);   //taking value from the input field
						dispatch(setAmount(Number.isFinite(value) ? value : 0));  //checks if the value is real or not, so if its real it will use 'value', if not will use 0
					}}
				/>

				<Input placeholder="Ödənişin təyinatı" style={{ width: 455, height: 56 }} />

				<div className={styles.buttons}>
					<ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
						<Flex vertical gap="small">
							<Flex gap="small" wrap>
								<Button style={{ backgroundColor: '#FFD400', color: 'black', width: 221.5, height: 56, borderRadius: 8 }}
								onClick={() => navigate('/sign')}
								>İmzaya göndər</Button>
							</Flex>
						</Flex>
					</ConfigProvider>

					<Flex gap="small" wrap>
						<Button type="primary" style={{ width: 221.5, height: 56, borderRadius: 8 }}>
							İmzala
						</Button>
					</Flex>
				</div>
			</div>

			<div className={styles.fileUploadSection}>
				<div className={styles.button}>
					<Upload {...props}>
						<Button>Şablonlardan seç</Button>
						<img src={fileBookmark} alt="fileBookmark" className={styles.buttonIcon}/>
					</Upload>
				</div>

				<div className={styles.commisionCalc}>
					<div>
						<p className={styles.title}>Köçürülən məbləğ</p>
						<p className={styles.amount}>{totalWithCommission.toFixed(2)}</p>
					</div>
					<p>Kommisiya: {commission.toFixed(2)} AZN</p>
				</div>

				<div className={styles.button}>
					<Upload {...props}>
						<Button>Bu köçürməni şablon et</Button>
						<img src={bookmark} alt="bookmark" className={styles.buttonIcon}/>
					</Upload>
				</div>
			</div>
		</div>
	);
};

export default HomepageMain;