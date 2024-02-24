import React, { useState } from 'react';
const _ = require('lodash');

const UnitsDrill = () => {
    const [volumeSelection, setVolumeSelection] = useState(true)
    const [areaSelection, setAreaSelection] = useState(true)
    const [lengthSelection, setLengthSelection] = useState(true)
    const [task, setTask] = useState(() => createTaskLength())
    const [inputAnswer, setInputAnswer] = useState("")
    const [score, setScore] = useState(0)

    const CheckBox = ({ label, value, onChange }) => {

        return (
            <label>
                <input type="checkbox" checked={value} onChange={() => onChange(!value)} />
                {label}
            </label>
        )
    }

    //arvo oikea vastaus välillä 1000 ... 0.1
    //esim. 100 m (oikea vastaus)
    //yksikkö mistä mihin muunnetaan, esim m -> km
    //muutetaan 100 m -> 0,1 km (tämä on siis muunnettava luku)
    //oppilaan tulee siis muuntaa km -> m

    const checkAnswer = (textInput, currentTask) => {
        const floatInput = parseFloat(textInput)

        if (floatInput === currentTask["answer"]) {
            setScore(score + 1)
        } else {
            setScore(0)
        }
        setInputAnswer("")
        setTask(createTaskLength())
    }

    return (
        <div>
            This is a Units drill
            <div>

                <CheckBox label="Pituus" value={lengthSelection} onChange={setLengthSelection} />
                <CheckBox label="Pinta-ala" value={areaSelection} onChange={setAreaSelection} />
                <CheckBox label="Tilavuus" value={volumeSelection} onChange={setVolumeSelection} />

            </div>
            <div>
                {task["task"]} = <input type="text" value={inputAnswer} onChange={(e) => setInputAnswer(e.target.value)} /> {task["answerUnit"]}<br />
                <input type="button" value="Tarkista" onClick={() => checkAnswer(inputAnswer, task)} />
            </div>
            <div>
                Streak: {score}
            </div>
        </div>)
}

const createTaskLength = () => {
    console.log("Create task length called")
    const lengthUnits = {
        "km": 3,
        "hm": 2,
        "dam": 1,
        "m": 0,
        "dm": -1,
        "cm": -2,
        "mm": -3
    }
    //const basenumber = _.sample([10,100,1000])
    const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"]
    const from = _.sample(units)
    let to = ""

    do {
        to = _.sample(units)
    } while (to === from)

    const fromExponent = lengthUnits[from]
    const toExponent = lengthUnits[to]
    const diff = fromExponent - toExponent

    let originalQuantity = 0

    console.log(toExponent)
    let finalQuantity = Math.floor((Math.random() * _.sample([10, 100, 1000])))

    if (finalQuantity === 0) { finalQuantity = 1 }
    console.log("finalquatity" + finalQuantity)
    if (diff > 0) {
        originalQuantity = finalQuantity * 10 ** (diff)
    } else {

        originalQuantity = finalQuantity / 10 ** (-diff)
    }

    return {
        task: `${originalQuantity} ${to}`,
        answer: finalQuantity,
        answerUnit: from,
        type: "length"
    }
}

export default UnitsDrill