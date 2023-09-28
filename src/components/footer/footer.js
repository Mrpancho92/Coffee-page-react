import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer_image'>
                <img src={require("./images/Group.png")} alt="coffee beans" />
            </div>

            <div className='footer_info'>
                <a href='1'>Coffee house</a>
                <a href='1'>Our coffee</a>
                <a href='1'>For your pleasure</a>
            </div>

            <div className='footer_icon'>
                <div className="line_left"></div>
                <img src={require("../about/images/about-beans.png")} alt="coffee beans" />
                <div className="line_right"></div>
            </div>
        </div> 
    )
}

export default Footer;


           