import React, { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjects from "./components/NoProjects";
import SelectedProject from "./components/SelectedProject";

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	const handleStartAddProject = () => {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: null,
		}));
	};

	const handleAddProject = (projectData) => {
		const newProject = { ...projectData, id: Math.random() };
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: undefined,
			projects: [...prevState.projects, newProject],
		}));
	};

	const handleCancelAddProject = () => {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: undefined,
		}));
	};

	const handleSelectProject = (id) => {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: id,
		}));
	};

	const handleDeleteProject = () => {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: undefined,
			projects: [
				...prevState.projects.filter(
					(project) => project.id !== prevState.selectedProjectId
				),
			],
		}));
	};

	const handleAddTask = (text) => {
		setProjectState((prevState) => {
			const taskId = Math.random();
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: taskId,
			};

			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			};
		});
	};
	const handleDeleteTask = (id) => {
		setProjectState((prevState) => ({
			...prevState,
			tasks: prevState.tasks.filter((task) => id !== task.id),
		}));
	};

	const selectedProject = projectState.projects.find(
		(project) => project.id === projectState.selectedProjectId
	);

	let content = (
		<SelectedProject
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			tasks={projectState.tasks}
		/>
	);

	if (projectState.selectedProjectId === undefined) {
		content = <NoProjects onStartAddProject={handleStartAddProject} />;
	} else if (projectState.selectedProjectId === null) {
		content = (
			<NewProject
				onAdd={handleAddProject}
				onCancel={handleCancelAddProject}
			/>
		);
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSidebar
				onStartAddProject={handleStartAddProject}
				projects={projectState.projects}
				onSelect={handleSelectProject}
				selectedProjectId={projectState.selectedProjectId}
			/>
			{content}
		</main>
	);
}

export default App;
