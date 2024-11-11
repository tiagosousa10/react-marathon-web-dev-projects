import React, { useEffect, useState } from 'react'
import img from './logo.png'
import "./index.css"
import useLocalStorage from './storage'

const Editor = () => {

const [html,setHtml] = useLocalStorage("html", "")
const [css,setCss] = useLocalStorage("css","")
const [js,setJs] = useLocalStorage("js","")
const [codepenCode,setCodepenCode] = useState("")

useEffect(() => {
    const timeout = setTimeout(() => {
        setCodepenCode(`
            <html>
            <style>${css}</style>
            <script>${js}</script>
            <body>${html}</body>
            </html>
        `)
    }, 200)

    return () => clearTimeout(timeout)
},[html,css,js])



  return (
    <div className='wrapper'>
    <div    className='header'>
        <img src={img} alt='logo'   />
        <span>Codepen</span>
    </div>

    <div className='input-cover'>
        <textarea value={html} typeof='text' className='input' placeholder='html' onChange={(e) => {setHtml(e.target.value)}} />
        <div className='width' />
        <textarea value={css} typeof='text'  className='input'  placeholder='css' onChange={(e) => {setCss(e.target.value)}} />
        <div className='width' />
        <textarea value={js} typeof='text'  className='input'  placeholder='js' onChange={(e) => {setJs(e.target.value)}} />
    </div>
    
    <div className='ouput'>
<iframe
    srcDoc={codepenCode}
    title='output'
    sandbox='allow-scripts'
    frameBorder='0'
    width='100%'
    height='100%'

/>

    </div>    
    </div>

   
  )
}

export default Editor
