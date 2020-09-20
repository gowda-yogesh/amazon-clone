import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <div className="footer">

            <div className="footer__column">
                <h2>Name</h2>
                <br />
                <p>Yogesh Gowda</p>
                <p >
                    <a href="tel:+91-9945571239">[+91 9945571239]</a>
                </p>
                <p >
                    <a href="mailto:yogc1996@gmail.com">[yogc1996@gmail.com]</a>
                </p>
            </div>
            <div className="footer__column">
                <h2>Address</h2>
                <br />
                <p>#353, 1st cross, 2nd main,
                    MES Road, Bahubali Nagar, Jalahalli, Bangalore </p>
            </div>
            <div className="footer__column">
                <h2>Skills</h2>
                <br />
                <p>Full Stack Developer</p>
                <p>Athlete</p>
                <p>Risk Taker</p>
            </div>

        </div>
    )
}

export default Footer
