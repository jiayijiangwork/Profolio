import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
const SocialMedia = () => {
    return (
        <div className='app__social'>

            <div>
                <a href='https://github.com/jiayijiangwork'>
                    <BsGithub /></a>
            </div>
            <div>
                <a href='www.linkedin.com/in/jiayi-jiang-4a903a278'>
                    <BsLinkedin />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia