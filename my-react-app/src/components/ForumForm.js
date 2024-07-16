import React, {useState} from 'react'

export default function ForumForm(props) {
    const wordCount = (text)=>{
        let regex = /\s+\S+/;
        let numOfWords = text.split(regex);
        return numOfWords.length;
    }
    const convertToClick = ()=> {
        console.log('Uppercase change button clicked');
        setText('This is the message from the customer');
        let newText = text.toUpperCase();
        setText(newText)
    }

    const convertChange = (event)=> {
        console.log('On change clicked');
        setText(event.target.value);
    }

    const reverdedText = ()=> {
        let str="";
        for (let index = text.length-1; index >=0; index--) {
            str+= text[index];
        }
        setText(str);
    }

    const [text, setText] = useState('Enter Your Text');

  return (
    <>
    <div>
        <div className='container' style={{color: props.mode=== 'light'?'black':'white'}}>
            <h1 className='main-heading'>{props.sectionHeading}</h1>
            <div className="my-3">
                    <textarea type="textarea" className="form-area w-100 my-3" style={{backgroundColor: props.mode=== 'light'?'grey':'white'}} id="mydata" value={text} onChange={convertChange} rows="8"></textarea>
                    <button className="btn btn-primary" onClick={convertToClick}>Convert Uppercase </button>
                    <button className="btn btn-primary mx-3" onClick={reverdedText}>Show Reverse text </button>
                </div>  
        </div>
    </div>
    <div className='container' style={{color: props.mode=== 'light'?'black':'white'}}>
        <h1>Short text summary</h1>
        <p>Total text letters are: {text.length} and total words are {text===""? 0 : wordCount(text)}</p>
        <p className="timeTo-read">{0.008 * text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
