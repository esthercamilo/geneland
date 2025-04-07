import React from 'react'
import "./App.css"
import { TextBox } from "@progress/kendo-react-inputs"
import { Button } from "@progress/kendo-react-buttons"
import { SendHorizontal } from "lucide-react"

function App() {
  return (
    <section id="app">
      <div id="frame">
        <div id='message'>
          <div className="message-box-bot">
            <p>This is a test</p>
          </div>
          {/* <div className="message-box-user">
            <p>This is a test</p>
          </div> */}
        </div>
        <div id="input-box">
          <TextBox placeholder="Type here..." class="input" />
          <Button class="submit-button"><SendHorizontal color="#ffffff"/></Button>
        </div>
      </div>
    </section>
  )
}

export default App
