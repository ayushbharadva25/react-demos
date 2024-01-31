import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

function NoProjects({ onStartAddProject }) {
	return (
		<div className="mt-24 text-center w-2/3">
			<img
				src={noProjectImage}
				alt="An empty list"
				className="w-16 h-16 object-contain mx-auto"
			/>
			<p className="text-xl font-bold text-stone-500 my-4">
				No Project Selected
			</p>
			<p className="text-stone-400 mb-4">
				Select a project or create a new project
			</p>
			<div>
				<Button onClick={onStartAddProject}>Create new Project</Button>
			</div>
		</div>
	);
}

export default NoProjects;
