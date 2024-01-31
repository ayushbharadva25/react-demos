import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel }) {
	const modal = useRef();
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();

	const handleSave = () => {
		const enteredTitle = titleRef.current.value;
		const enteredDescription = descriptionRef.current.value;
		const enteredDueDate = dueDateRef.current.value;

		if (
			enteredTitle.trim() === "" ||
			enteredDescription.trim() === "" ||
			enteredDueDate.trim() === ""
		) {
			modal.current.open();
			return;
		}

		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	};

	return (
		<>
			<Modal ref={modal} buttonText="Okay">
				<h2 className="text-xl font-bold text-stone-700 my-4">
					Invalid Inputs
				</h2>
				<p className="text-stone-600 mb-4">
					Oops.. looks like you forgot to enter some values
				</p>
				<p className="text-stone-600 mb-4">
					Please provide valid values for every Input field.
				</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button
							className="text-stone-700 hover:text-stone-900"
							onClick={onCancel}
						>
							Cancel
						</button>
					</li>
					<li>
						<button
							className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-slate-950"
							onClick={handleSave}
						>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input type="text" ref={titleRef} label="Title" />
					<Input ref={descriptionRef} label="Description" textarea />
					<Input type="date" ref={dueDateRef} label="Due Date" />
				</div>
			</div>
		</>
	);
}

export default NewProject;
