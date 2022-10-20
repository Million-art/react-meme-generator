import React from "react";
import MemsData from "./MemsData";
export default function Form(){
    const [meme, setMeme ]=React.useState({
        topText:'',
        bottomText:'',
        randumUrl:'https://i.imgflip.com/30b1gx.jpg'
    });
    const [allMeme , setAllmemes]=React.useState([])
 React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllmemes(data.data.memes))
    }, [])
     function generate(){
         const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url=allMeme[randomNumber].url
        setMeme(prevState=>
            (
                 {
                ...prevState,randumUrl:url
            })
            )
    }  
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <div className="form">
            <div className="txtbox">
                <input type='text'
                 placeholder="shut up"
                 name="topText"
                 value={meme.topText}
                 onChange={handleChange}
                 />
                <input type='text'
                 placeholder="and take my money"
                 name='bottomText'
                 value={meme.bottomText}
                 onChange={handleChange}
                 />
            </div>
                <div className="btn"> 
                    <input type='submit'
                        name="topText" 
                        value='Generate'
                        onClick={generate}
                        />
                </div>
                    <div className="imgbox">
                        <img src={meme.randumUrl} />
                        <h1 className="toptext"> {meme.topText}</h1>
                        <h1 className="bottomtext"> {meme.bottomText} </h1>

                    </div>
        </div>
    )
}