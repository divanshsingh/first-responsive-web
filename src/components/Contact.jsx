import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <main>
        <h1>Contact us</h1>
        <form>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='Enter your name' />
            </div>
            <div>
                <label>Email</label>
                <input type="email" required placeholder='Enter your email' />
            </div>
            <div>
                <label>Message</label>
                <input type="text" required placeholder='What you wanna say...' />
            </div>
            <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
