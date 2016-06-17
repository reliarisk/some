import React from "react";



export default class Footer extends React.Component {
  render() {
	  const imgFooter = "img/pemex-logo.png";
    return (
    <footer>

            <img src={imgFooter} alt="Pemex"/>
            <p><i>Powered by:</i> <b>Reliability and Risk Management</b></p>

    </footer>
    );
  }
}
