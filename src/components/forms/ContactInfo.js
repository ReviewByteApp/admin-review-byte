import React, { useEffect, useState } from 'react'
import styles from './contactinfo.module.css'

const CompanyContactInfo = () => {

    const inputTitles=[
        {id:1,title:"Phone Number",type:"text"},
        {id:2,title:"Country",type:"text"},
        {id:3,title:"City",type:"text"},
        {id:4,title:"Map",type:"text"},
    ]

    const [inputValues,setInputValues]=useState([
        {id:1,value:''},
        {id:2,value:''},
        {id:3,value:''},
        {id:4,value:''},
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

    const getContactInfo=()=>{
        const updatedInputValues = inputValues.map(input => {
            return { ...input, value:'Company Map' };
        });
        setInputValues(updatedInputValues);
    }

    const cancelFun=()=>{
        getContactInfo()
    }

    useEffect(()=>{
        getContactInfo()
    },[])

    const saveNewContactInfo=(e)=>{
        e.preventDefault()
        console.log(inputValues)
    }

  return (
    <div className={styles.cont}>
        <form className={styles.box} onSubmit={saveNewContactInfo}>
            <div className={styles.title}>Tell your customers how to get in touch.</div>
            {inputTitles.map(l=>(
                <div className={styles.inputbox} key={l.id}>
                    <span className={styles.inputtitle}>{l.title}</span>
                    <input 
                    type={l.type} 
                    value={inputValues.find(i => i.id === l.id).value}  
                    onChange={(e)=>handleInputChange(e,l.id)}
                    required
                    />
                </div>
            ))}
            <div className={styles.savebox}>
                <button className={styles.savebtn} type='submit'>Save and Publish</button>
                <button className={styles.savebtn} onClick={cancelFun}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default CompanyContactInfo