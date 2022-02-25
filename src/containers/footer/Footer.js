import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">

            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to step into the future before others
                </h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>
                    Request Early access
                </p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>
                        Mcwachira all rights reserved
                    </p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>
                        Overons
                    </p>
                    <p>
                        Social Media
                    </p>
                    <p>
                        Counters
                    </p>
                    <p>
                        Contact
                    </p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>
                        Company
                    </p>
                    <p>
                        Terms & Conditions
                    </p>
                    <p>
                        Privacy policy
                    </p>
                    <p>
                        Contact
                    </p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>
                        Get in touch
                    </p>
                    <p>
                        mcwachira
                    </p>
                    <p>
                        0850-1234
                    </p>
                    <p>
                        info@gpt.net
                    </p>
                </div>

            </div>

            <div className="gpt3__footer-copyright">

                <p>
                    &copy; 2022 GPT-3 . All Rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer