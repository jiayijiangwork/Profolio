import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, message } = formData

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <h2 className='head-text'>Take a coffee & chat with me</h2>
            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt='email'></img>
                    <a href="jiayijiangwork@outlook.com" className='p-text'>jiayijiangwork@outlook.com</a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt='mobile'></img>
                    <a href="tel: +610414400306" className='p-text'>+610414400306</a>
                </div>
            </div>
            <div className='app__footer-form app_flex'>
                <div className='app_flex'>
                    <input className="p-text" type="name" placeholder="Your Name" name="username" value={name} onChange={handleChangeInput} />
                </div>
                <div className='app_flex'>
                    <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div>
                    <textarea
                        className="p-text"
                        placeholder="Your Message"
                        value={message}
                        name="message"
                        onChange={handleChangeInput}
                    />
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);