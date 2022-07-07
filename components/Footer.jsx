import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Link from 'next/link'
const Footer = () => {
    return (
        <div className="footer-container">
            <p>2022 Hansraj Saini All rights reserverd</p>
            <p className="icons">
                <Link href='https://github.com/Hansraj8149?tab=repositories'>
                    <AiFillLinkedin />
                </Link>
                <Link href='https://www.linkedin.com/in/hansraj-saini-634864190/'>
                    <AiFillGithub />
                </Link>
            </p>
        </div>
    )
}
''
export default Footer