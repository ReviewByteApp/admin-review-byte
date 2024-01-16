import React, { useEffect, useState } from 'react'
import styles from './basicinfo.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const CompanyBasicInfoForm = () => {

    const inputTitles=[
        {id:1,title:"Company Name",type:"text"},
        {id:2,title:"Company Website",type:"text"},
        {id:3,title:"Company Email",type:"text"},
        {id:4,title:"Password",type:"password"},
        {id:5,title:"Logo",type:"file"},
    ]

    const [inputValues,setInputValues]=useState([
        {id:1,value:''},
        {id:2,value:''},
        {id:3,value:''},
        {id:4,value:''},
        {id:5,value:''},
    ])

    const handleInputChange=(e,id)=>{
        const updatedInputValues = inputValues.map(input => {
            if (input.id === id) {
                return { ...input, value: e.target.value };
            }
            return input;
        });
        setInputValues(updatedInputValues);
    }

    const [logoPreview,setLogoPreview]=useState(null)
    const [showPassword,setShowPassword]=useState(false)

    const handleLogoChange=(e)=>{
        const file=e.target.files[0];
        setLogoPreview(URL.createObjectURL(file))
    }

    const getBasicInfo=()=>{
        const updatedInputValues = inputValues.map(input => {
            return { ...input, value:'Company Name' };
        });
        setInputValues(updatedInputValues);
        setLogoPreview('/logo192.png')
    }

    const cancelFun=()=>{
        getBasicInfo()
    }

    useEffect(()=>{
        getBasicInfo()
    },[])

    const saveNewBasicInfo=(e)=>{
        e.preventDefault()
        console.log(inputValues)
        console.log(logoPreview)
    }

  return (
    <div className={styles.cont}>
        <form className={styles.box} onSubmit={saveNewBasicInfo}>
            <div className={styles.title}>Add your logo, company name, and domain to your Review Byte profile.</div>
            {inputTitles.map(l=>(
                <div className={styles.inputbox} key={l.id}>
                    <span className={styles.inputtitle}>{l.title}</span>
                    {l.type==='file' ?
                    <input type={l.type} onChange={handleLogoChange}/>
                    :
                    l.type==='password' ?
                    <>
                    <input type={showPassword?'text':l.type} 
                    value={inputValues.find(i => i.id === l.id).value}
                    onChange={(e)=>handleInputChange(e,l.id)}/>
                    <span className={styles.showpassword} onClick={()=>setShowPassword(c=>!c)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</span>
                    </>
                    :
                    <input 
                    type={l.type} 
                    value={inputValues.find(i => i.id === l.id).value}  
                    onChange={(e)=>handleInputChange(e,l.id)}
                    required
                    />
                    }
                </div>
            ))}
            <div className={styles.reviewlogo}>
                <img src={logoPreview} alt='logo'/>
            </div>
            <div className={styles.savebox}>
                <button className={styles.savebtn} type='submit'>Save and Publish</button>
                <button className={styles.savebtn} onClick={cancelFun}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default CompanyBasicInfoForm