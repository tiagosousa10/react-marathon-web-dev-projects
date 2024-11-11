import { clear } from '@testing-library/user-event/dist/clear'
import React, { useEffect, useState } from 'react'

const Editor = () => {
const [html,setHtml] = useState("")
const [css,setCss] = useState("")
const [js,setJs] = useState("")
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
    <div>
    <div>
        <textarea value={html} typeof='text' onChange={(e) => {setHtml(e.target.value)}} />
        <textarea value={css} typeof='text' onChange={(e) => {setCss(e.target.value)}} />
        <textarea value={js} typeof='text' onChange={(e) => {setJs(e.target.value)}} />

    </div>
    
    <div>
    </div>
        {codepenCode}
    </div>

   
  )
}

export default Editor
