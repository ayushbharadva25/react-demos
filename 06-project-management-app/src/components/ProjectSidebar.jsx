import React from "react";
import Button from "./Button";

function ProjectSidebar({
	onStartAddProject,
	projects,
	onSelect,
	selectedProjectId,
}) {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
				Your Projects
			</h2>
			<div>
				<Button onClick={onStartAddProject}>+ Add Projects</Button>
			</div>
			<ul className="mt-8">
				{projects.map((project) => {
					let cssBtnClass =
						"w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
					if (project.id === selectedProjectId) {
						cssBtnClass += " bg-stone-800 text-stone-200";
					} else {
						cssBtnClass += " text-stone-400";
					}

					return (
						<li key={project.id}>
							<button
								className={cssBtnClass}
								onClick={() => onSelect(project.id)}
							>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

export default ProjectSidebar;
