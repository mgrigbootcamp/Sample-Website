import React from 'react'

export default function Contact() {
  return (
    <div className="main-content-contact">
            <div className="contact-content">
                <div className="contact-content-left">
                    <div>
                        <h3>Get in <span>Touch</span></h3>
                    </div>
                    <div>
                        <ul className="my-contact">
                            <li> Corona, CA</li>
                            <li>golf4griggs47@gmail.com</li>
                            <li> 714-887-6083</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="contact-content-right">
                    <h3>Contact <span>Form</span></h3>
                    <div className="contact-form">
                        <form style={{maxWidth:"500px",margin:"auto"}}>
                            <div className="input-container">
                                <i className="fa fa-user icon"></i>
                                <input className="input-field" type="text" placeholder="Full Name" name="fullname" />
                            </div>

                            <div className="input-container">
                                <i className="fa fa-envelope icon"></i>
                                <input className="input-field" type="text" placeholder="Email" name="email"/>
                            </div>

                            <div className="input-container">
                                <i className="fa fa-key icon"></i>
                                <input className="input-field" type="phone" placeholder="Phone" name="phone"/>
                            </div>

                            <div className="input-container">
                                <i className="fa fa-key icon"></i>
                                <textarea className="input-field" placeholder="Message for Me" name="message"></textarea>
                            </div>
                            <button type="submit" className="btn">Contact</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}
