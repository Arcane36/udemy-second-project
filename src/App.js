import Concept from "./components/Concepts/Concept";
import Header from "./components/Header/Header";

import "./Main.scss";

import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";

const concepts = [
    {
        title: "Components",
        image: componentsImage,
        description:
            "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
    },
    {
        title: "State",
        image: stateImage,
        description:
            "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
    },
    {
        title: "Events",
        image: eventsImage,
        description:
            "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
    },
];

const header = {
    image: {
        src: keyConceptsImage,
        alt: "Medal badge with a star",
    },
    headline: "Key React Concepts",
    text: "Selected key React concepts you should know about",
};

const App = () => {
    return (
        <div>
            <Header image={header.image} headline={header.headline} text={header.text} />

            <div className='concept'>
                {concepts.map((concept, index) => (
                    <Concept
                        title={concept.title}
                        image={concept.image}
                        description={concept.description}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
