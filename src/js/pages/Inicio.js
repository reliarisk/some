import React from "react";
import { Link } from "react-router";
import Article from "../components/Article";

require("../../css/welcome.css");


export default class Inicio extends React.Component {

  render() {
	const imgFooter = "img/pemex-logo.png";
	const imgLogoMosip = "img/logo.png";
	const logoStyle = {
		width: "100%",
		padding: "15px",
		paddingLeft: "20px",
		position: "relative"
	};

	const buttonStyle = {
		width: "120px",
		height: "120px",
		// -moz-border-radius: "50%",
		// -webkit-border-radius: "50%",
		borderRadius: "50%",
		display: "block",
		textAlign: "center",
		verticalAlign: "middle",
		margin: "20px",
		fontSize: "60px",
		paddingTop: "17px",
		lineHeight: "1.42",
		boxSizing: "border-box",
		backgroundColor: "#007065",
		color: "#FFFFFF",
		textDecoration: "none"
	};



	return (
		<div class="container-fluid">
			<header>
				<section class="top">
					<a href="Logo Mosip"/>
					<img src={imgLogoMosip}/>
				</section>
				<div class="row row1">
					<div class="col-xs-12">
						<ul class="text-center dashboard-btn">
							<li>
								<Link  class="btnPemex glyphicon glyphicon-arrow-right" to="secuenciaoriginal/"></Link>
							</li>
							<li>
								<Link  class="btnPemex glyphicon glyphicon-question-sign" to="/"></Link>
							</li>
						</ul>
						<p class="pinfo"/>
					</div>

				</div>
			</header>

		</div> // container-fluid
    );
  }

  componentWillMount(){
	document.body.style.backgroundImage = "url('img/fondo.png')";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "cover";

  }


}
