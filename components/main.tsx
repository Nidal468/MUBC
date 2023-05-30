import {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/home.module.css'
import axios from 'axios';
export function Upload(){
	const [uploading, setUploading] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedFile, setSelectedFile] = useState<File>();
	const handleUpload = async () => {
		setUploading(true);
		try{
			if(!selectedFile) return;
			const formData = new FormData();
			formData.append("myImage", selectedFile);
			const { data } = await axios.post("./api/image", formData);
			console.log(data);
		} catch (error: any) {
	console.log(error.response?.data);
		}
		setUploading(false);
	}; 
	return(
			<div style={{display: 'flex', alignItems: 'center',flexDirection: 'column', zIndex: '999'}}>
			<label>
				<input type='file' hidden onChange={({target}) => {
				if(target.files) {
				const file	= target.files[0];
					setSelectedImage(URL.createObjectURL(file));
					setSelectedFile(file);
				}
				}}/>
				<div style={{width: '300px', height: '100px', border: '1px solid red', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				{selectedImage ? (<img src={selectedImage} style={{width: "100px"}} />) : (<span>Select Image</span>)}
			</div>
			</label>
			<button disabled={uploading} style={{opacity: uploading? '0.5':'1', background: 'black', color: "#fff"}} onClick={handleUpload} >{uploading? 'Uploading':'Upload'}</button>
		</div>
	)
}
export function Login(){
	return(
		<div className={styles.sign}>SIGN IN</div>
	)
}
export function Logout(){
	return(
		<div className={styles.sign}>SIGN OUT</div>
	)
}