import React, { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

function Examples() {
	const [selectedTopic, setSelectedTopic] = useState(null);

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
	}

	return (
		<section id="examples">
			<menu>
				<TabButton
					isSelected={selectedTopic === "components"}
					onSelect={() => handleSelect("components")}
				>
					Components
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "jsx"}
					onSelect={() => handleSelect("jsx")}
				>
					JSX
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "props"}
					onSelect={() => handleSelect("props")}
				>
					Props
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "state"}
					onSelect={() => handleSelect("state")}
				>
					State
				</TabButton>
			</menu>
			{!selectedTopic ? (
				<p>please select a topic..</p>
			) : (
				<div id="tab-content">
					<h3>{EXAMPLES[selectedTopic].title}</h3>
					<p>{EXAMPLES[selectedTopic].description}</p>
					<pre>
						<code>{EXAMPLES[selectedTopic].code}</code>
					</pre>
				</div>
			)}
		</section>
	);
}

export default Examples;
