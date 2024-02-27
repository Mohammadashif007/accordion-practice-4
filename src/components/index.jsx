import { useState } from "react";
import "./style.css";
import data from "./data";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState([]);
    const [enable, setEnable] = useState(false);

    const handleSelectedItem = (currentId) => {
        setSelected(currentId === selected ? null : currentId);
    };

    const handleMultiSelection = (currentId) => {
        const cpyMulti = [...multiSelection];
        const findIndexOfCurrentId = cpyMulti.indexOf(currentId);
        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1) cpyMulti.push(currentId);
        else cpyMulti.splice(findIndexOfCurrentId, 1);
        setMultiSelection(cpyMulti);
    };

    return (
        <div className="wrapper">
            <button onClick={() => setEnable(!enable)}>
                Enable MultiSelection
            </button>
            <div className="accordion">
                {data && data.length ? (
                    data.map((item) => (
                        <div key={item.id} className="item">
                            <div
                                onClick={
                                    enable
                                        ? () => handleMultiSelection(item.id)
                                        : () => handleSelectedItem(item.id)
                                }
                                className="title"
                            >
                                <p>{item.question}</p>
                                <span>+</span>
                            </div>
                            {selected === item.id ||
                            multiSelection.indexOf(item.id) !== -1 ? (
                                <p className="content">{item.answer}</p>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <p>Data not found</p>
                )}
            </div>
        </div>
    );
};

export default Accordion;
