import React from "react";
import { BtnAmplia } from "./btnAmplia";
import { BtnLike } from "./btnLike";
export const Card = () => {
	return (
		<div>
			<div className="testimonial-group">
				<div className="row mt-4">
					<div className="cardhorizontal col-4">
						<div className="card">
							<img
								src="https://lumiere-a.akamaihd.net/v1/images/magistrate-morgan-elsbeth-main_d7b9d192.jpeg?region=262%2C1%2C951%2C536&width=768"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Personaje</h5>
								<p className="card-text ml-3">
									<li>Gender:</li>
									<li>Hair Color:</li>
									<li>Eye Color:</li>
								</p>
								<div className="d-flex justify-content-between">
									<BtnAmplia />
									<BtnLike />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
