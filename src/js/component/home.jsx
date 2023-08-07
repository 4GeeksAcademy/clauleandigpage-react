import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotrom";
import Card from "./cards";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar />
			<div className=""><Jumbotron /></div>
			<div class="container text-center">
				<div class="row">
					<div class="col">
						<Card />
					</div>
					<div class="col">
						<div className=""><Card /></div>
					</div>
					<div class="col">
						<div className=""><Card /></div>
					</div>
					<div class="col">
						<div className=""><Card /></div>
					</div>
				</div>
			</div>
			<div className="">
				<Footer />

			</div>
		</div>

			);
};

			export default Home;
