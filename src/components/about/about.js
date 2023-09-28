import "./about.css";

const About = () => {
    return (
        <div className="about">
            <div className='about_logo'>
                <img src={require("./images/about-logo.jpg")} alt="the girl drinks coffee" />
            </div>
            <div className="about_info">
                <div className='about_text'>
                    <p>About our beans</p>
                </div>

                <div className='about_image'>
                    <div className="line_left"></div>
                    <img src={require("./images/about-beans.png")} alt="coffee beans" />
                    <div className="line_right"></div>
                </div>

                <div className='about_description'>
                    <p>Extremity sweetness difficult behaviour he of. On<br/> disposal of as landlord horrible.</p>
                    <p>Afraid at highly months do things on at. 
                        Situation recommend objection do intention <br/> so questions.</p>
                    <p>As greatly removed calling pleased improve an.</p>
                    <p>Last ask him cold feel <br/> met spot shy want. 
                        Children me laughing we <br/> prospect answered followed. At it went <br/>
                        is song that held help face.</p>
                </div>
            </div>
        </div>
        
    )
}

export default About;