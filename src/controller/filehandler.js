import { FileOpener } from '@ionic-native/file-opener/ngx'


const filehandler: React.FC = () => {
	let fileopener = new FileOpener()


	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonButton onClick={openScanner}>Scan barcode</IonButton>
			</IonContent>
		</IonPage>
	)
}