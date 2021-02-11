import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "router/router";
import { StoreProvider } from "store/index";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<Router />
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById("root")
) as any;

reportWebVitals();
