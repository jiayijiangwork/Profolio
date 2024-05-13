import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {
    // 调用 useState(false) 时，它返回了一个数组，数组的第一个元素是一个名为 toggle 的变量，它代表着当前的状态值，初始值为 false。第二个元素是一个名为 setToggle 的函数，用于更新 toggle 的值。
    // useState钩子来声明一个状态变量和一个更新该状态的函数。
    const [toggle, setToggle] = useState(false)
    return (
        // __是命名方法，适用于特定的块（block）、元素（element）或修饰符（modifier）。
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt='logo' />
            </div>
            <ul className='app__navbar-links'>
                {/* .map() 方法用于遍历字符串数组 ['home', 'about', 'contact', 'work', 'skills', 'contact'] 中的每个元素，然后对每个元素执行一个箭头函数 (item) => */}
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    // href 属性指向了当前页面内的一个锚点。锚点的值是由 item 变量构建的，因此每个链接都会指向页面内具有相应 ID 的位置
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className='app__navbar-menu'>
                {/* 点击 HiMenuAlt4 组件时会调用 setToggle(true)。这意味着点击后，toggle 的状态会被设置为 true */}
                <HiMenuAlt4 onClick={() => setToggle(true)}></HiMenuAlt4>
                {/* &&代表如果toggle状态为true将执行后续 */}
                {toggle && (
                    // framer-motion 库中的 motion.div
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transation={{ duration: 0.85, ease: "easeOut" }}
                    >
                        {/* hix是当toggle打开时的关闭按钮 */}
                        <ul>
                            <HiX onClick={() => setToggle(false)} />
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                // href 属性指向了当前页面内的一个锚点。锚点的值是由 item 变量构建的，因此每个链接都会指向页面内具有相应 ID 的位置
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar