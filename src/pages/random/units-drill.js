import React, { useState } from 'react';
const _ = require('lodash');

const UnitsDrill = () => {
    const [volumeSelection, setVolumeSelection] = useState(true)
    const [areaSelection, setAreaSelection] = useState(true)
    const [lengthSelection, setLengthSelection] = useState(true)
    const [task, setTask] = useState(() => createTaskLength())
    const [inputAnswer, setInputAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [scoreArray, setScoreArray] = useState([])

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
            setScoreArray(scoreArray.concat('😊'))
        } else {
            setScoreArray(scoreArray.concat('😭'))
            setScore(0)
        }
        setInputAnswer("")
        if (!lengthSelection && !areaSelection){
            setTask(createTaskLength())
            return
        }

        do {
            
            const choice = _.sample(["length", "area"])

            if (choice === "length" && lengthSelection) {
                setTask(createTaskLength())
                break
            }

            if (choice === "area" && areaSelection) {
                setTask(createTaskArea())
                break
            }
            
        } while (true)
    }

    return (
        <div className="Container">
            <h1>Drill n' kill: Units</h1>
            <div>

                <CheckBox label="Pituus" value={lengthSelection} onChange={setLengthSelection} />
                <CheckBox label="Pinta-ala" value={areaSelection} onChange={setAreaSelection} />

            </div>
            <div>
                {task["taskQuantity"]} <Unit unit={task["taskUnit"]} /> = <input type="text" value={inputAnswer} onChange={(e) => setInputAnswer(e.target.value)} /> <Unit unit={task["answerUnit"]} /><br />
                <input type="button" value="Tarkista" onClick={() => checkAnswer(inputAnswer, task)} />
            </div>
            
            <div>
                <h2>Drill Streak: {score}</h2>
            </div>

            <h2><Streak emojiArray={scoreArray}/></h2>
        </div>)
}

const createAnswerQuantity = () => {
    let finalQuantity = Math.floor((Math.random() * _.sample([10, 100, 1000]))) * _.sample([10, 100])

    finalQuantity = finalQuantity / _.sample([1, 10])

    if (finalQuantity === 0) { finalQuantity = 1 }

    return finalQuantity
}

const Unit = ({ unit }) => {
    const exponent = unit.slice(-1)
    if (isNaN(exponent)) {
        return <>{unit}</>
    }

    return <>{unit.slice(0, unit.length - 1)}<sup>{exponent}</sup></>

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

    const finalQuantity = createAnswerQuantity()
    let originalQuantity = 0

    console.log("finalquatity" + finalQuantity)
    if (diff > 0) {
        originalQuantity = finalQuantity * 10 ** (diff)
    } else {

        originalQuantity = finalQuantity / 10 ** (-diff)
    }

    return {
        taskQuantity: originalQuantity,
        taskUnit: to,
        answer: finalQuantity,
        answerUnit: from,
        type: "length"
    }
}

const createTaskArea = () => {
    console.log("Create task length called")
    const lengthUnits = {
        "km2": 3,
        "ha": 2,
        "a": 1,
        "m2": 0,
        "dm2": -1,
        "cm2": -2,
        "mm2": -3
    }

    const units = ["km2", "ha", "a", "m2", "dm2", "cm2", "mm2"]
    const from = _.sample(units)
    let to = ""
    let diff = 0
    do {
        do {
            to = _.sample(units)
        } while (to === from)

        const fromExponent = lengthUnits[from]
        const toExponent = lengthUnits[to]
        diff = fromExponent - toExponent
    } while (Math.abs(diff) > 2)

    const finalQuantity = createAnswerQuantity()
    let originalQuantity = 0

    console.log("finalquatity" + finalQuantity)
    if (diff > 0) {
        originalQuantity = finalQuantity * 10 ** (diff * 2)
    } else {

        originalQuantity = finalQuantity / 10 ** (-diff * 2)
    }

    return {
        taskQuantity: originalQuantity,
        taskUnit: to,
        answer: finalQuantity,
        answerUnit: from,
        type: "area"
    }
}

const Streak = ({emojiArray}) => {
    const emojis = emojiArray.reduce( (acc, cur) => acc + cur, "")
    return <div>{emojis}</div>
}

export default UnitsDrill