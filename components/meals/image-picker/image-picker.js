"use client";
import classes from './image-picker.module.css'
import React,{useRef, useState} from 'react';
import Image from 'next/image';

export default function ImagePicker({label , name}){
const [pickedImage , setPickedImage] = useState();
const refr = useRef();

const handlePickImage = () => {
 refr.current.click();   
}

const handleChangeImage = (e) => {
    console.log("hello")
 const file = e.target.files[0];
 if(!file){
    return ;
 }

const fileReader = new FileReader();

fileReader.onload = () => {
    console.log(fileReader.result)
setPickedImage(fileReader.result);
}

fileReader.readAsDataURL(file);

}


    return (
        <div className= {classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className= {classes.preview}>
            {!pickedImage && <p>Image is not picked yet.</p>}
            {pickedImage && <Image src = {pickedImage} fill/>}
                </div>
                <input
                  className={classes.input}
                  type = "file"
                  id = {name}
                  accept= "image/png, image/jpeg"
                  name = {name}
                  onChange = {handleChangeImage}
                  ref ={refr} />



                  <button className= {classes.button} type = "button" onClick={handlePickImage}>
                    Pick an Image
                  </button>
            </div>
        
    )
}