import React, { useEffect, useRef, useState } from 'react'
import { postBlog } from '../Redux/blog/action';
import styles from "./Styling/BlogInput.module.css";
import { useDispatch } from 'react-redux'
import ImageUploader from 'react-images-upload';
import { Navbar } from '../Routes/NavbarInput';
import { useHistory } from 'react-router-dom';

export const BlogInput = () => {
    const [title, setTitle] = useState('');
    const [plusBtn, setPlusBtn] = useState(false);
    const [fields, setFields] = useState([{ value: null }]);
    const [hiddenBtn, setHiddenBtn] = useState(false);
    const [hiddenInput, setHiddenInput] = useState(false);
    const [type, setType] = useState("text")
    const [time, setTime] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");
    const subTitleInput = useRef();
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const history = useHistory()

    
    const showOptions = () => {
        setHiddenBtn(!hiddenBtn)
    }

    const handleChange=(i, e) =>{
        const { name, value } = e.target;
        const values = [...fields];
        values[i].name = value;
        setFields(values);
    }
    const handleAddTitle = e => {
        if (e.keyCode === 13) {
            subTitleInput.current.focus()
            setHiddenInput(false)
            setPlusBtn(true)
        }
    }
    useEffect(() => {
        const length = fields.length
        let updated
        length <= 2 ? updated = 1 + "min read" :
            length <= 4 ? updated = 2 + "min read" :
            updated = 4 + "min read"
        setTime(updated)
    }, [fields])

    const handleAdd = (e) => {
        setPlusBtn(false)
        const values = [...fields];
        values.push({ value: null });
        if (e.keyCode === 13) {
            setFields(values)
            subTitleInput.current.focus()
            setHiddenInput(false)
            setPlusBtn(true)
        }
    }

    const fileHandler = (pic) => {
        const url = URL.createObjectURL(pic[0]);
        setImageUrl(url);
        setHiddenInput(false)
    }

    const triggerHandler = (val) => {
        setHiddenBtn(!hiddenBtn)
        setHiddenInput(!hiddenInput)
        setType(val)
    }
    
    const handlePublish = () => {
        dispatch(postBlog(title, imageUrl, fields, time))
        setShowPopup(!showPopup);
    }

    const previewHandler = () => {
        history.push("/my-blog")
    }
    return (
        <>
        <div className={showPopup ? styles.showSuccessPopup : styles.hideSuccesPopup}>
            <i class="fas fa-check-circle"></i>
            <h4>Your Blog Was Posted</h4>
            <button className={styles.previewBtn} onClick={previewHandler}>Preview Blog</button>
        </div>
        <Navbar handlePublish={handlePublish} />
        <div className={styles.newBlog}>

            <div className={styles.title_input}>
                <input className={styles.title} type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyUp={handleAddTitle}
                />
            </div>

            <div>
                {fields.map((field, idx) => {
                    return (
                        <div key={`${field}-${idx}`} className={styles.subTitle_array}>
                            {/* <button className={styles.showOptions} onClick={showOptions}>+</button> */}
                            <textarea className={styles.subTitle}
                                type={type} ref={subTitleInput}
                                placeholder="Tell your story…"
                                onChange={e => handleChange(idx, e)}
                                onKeyUp={handleAdd}
                            />
                        </div>
                        );
                })}
                <button className={plusBtn? styles.showOptions: styles.hideOptions} onClick={showOptions}>+</button>
                <div className={!hiddenBtn?styles.hiddenBtn:styles.showBtn}>
                    <button className={styles.showOptions} onClick={() => triggerHandler("file")}><i class="fas fa-camera"></i></button>
                    <button className={styles.showOptions} onClick={()=>triggerHandler("text")}><i class="fas fa-search"></i></button>
                    <button className={styles.showOptions} onClick={()=>triggerHandler()}><i class="fas fa-play"></i></button>
                    <button className={styles.showOptions} onClick={()=>triggerHandler()}><i class="fas fa-arrows-alt-h"></i></button>
                    <button className={styles.showOptions} onClick={()=>triggerHandler()}><i class="fas fa-minus"></i></button>
                </div>
                <ImageUploader  className={hiddenInput ? styles.showInput : styles.hideInput}
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={fileHandler}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />                
            </div>
            <img width="70%" style={{margin:' 10px auto'}} src={imageUrl} alt=""/>
        </div> 
    </>
    )
}