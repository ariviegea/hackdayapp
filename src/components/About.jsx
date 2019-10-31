import React, { Component } from 'react';

const img = {
    img: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F556528705%2F960x0.jpg%3Ffit%3Dscale',
    width: '100%',
    height: 'auto',
    padding: '30px'
}

class About extends Component {
    render() {
        return (
            <div className="about-us">
                <h1>About Us</h1>
                <img style={img} src={img.img} alt='Team work'/>
                <p>Your About Us page should be:
                    Informative. It doesn’t always have to tell the whole story, but it should at least provide people with an idea of who and what you are.
                    Contain social proof, testimonials, and some personal information that viewers can relate to such as education, family, etc.
                    Useful and engaging.
                    Easy to navigate and accessible on any device.
                    That may all sound complicated, but it really isn’t.
                    The main purpose of your About Us page is to give visitors a glimpse into the identity of either a person or business.
                    As users discover your brand, they need to distinguish what sets you apart and makes you… you.
                    This often requires finding the right balance between compelling content and a design carefully planned to look the part.
                    Conveying your identity in a fun and approachable – but also reliable and informative – way is challenging.
                    If you know who you are and your goal for your site, the About Us page should come naturally.
                    However, if you’re looking for some inspiration, you can always check out these 25 examples of creative and engaging About Us pages.
                    These excellent examples will help you build a personal and engaging website journey.</p>
            </div>
        )
    }
}

export default About;