import React, { useContext } from "react";
import PropsType from "prop-types";
import { Context } from "../../store/appContext";

export const BtnLike = props => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<button
				onClick={() => actions.setFavorites(props.name)}
				className="btn btn-outline-warning border border-warning p-2">
				{store.favorites.includes(props.name) ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
			</button>
		</div>
	);
};

BtnLike.propTypes = {
	name: PropsType.string,
	indice: PropsType.number
};
