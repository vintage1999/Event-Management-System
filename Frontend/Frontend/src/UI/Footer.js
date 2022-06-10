import "./Footer.css";

const { Component } = require("react");




class Footer extends Component {

    render() {

        return (
            <>
                <footer style={{"position":this.props.positionStyle}} className="bg-dark text-white text-center text-lg-start position-foot">
                    <div className="p-3 copyright-style text-center"><span>Event Booker  </span><small>&copy; Copyright 2022, Example Corporation</small></div>
                    
                </footer>
            </>
        );
    }
}

export default Footer;
