import React, { useState } from 'react';
import '../../components/layout.css'
const _ = require('lodash');

const UnitsDrill = () => {
    const [volumeSelection, setVolumeSelection] = useState(true)
    const [areaSelection, setAreaSelection] = useState(true)
    const [lengthSelection, setLengthSelection] = useState(true)
    const [litresSelection, setLitresSelection] = useState(true)
    const [task, setTask] = useState(() => createTaskLength())
    const [inputAnswer, setInputAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [scoreArray, setScoreArray] = useState([])

    const handleKeyDown = e => {
        console.log(e)
        if(e.key === "Enter"){
            checkAnswer(inputAnswer, task)
        }
    }
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

        if (!lengthSelection && !areaSelection && !volumeSelection && !litresSelection) {
            setTask(createTaskLength())
            return
        }

        do {

            const choice = _.sample(["length", "area", "volume", "litres"])

            if (choice === "length" && lengthSelection) {
                setTask(createTaskLength())
                break
            }

            if (choice === "area" && areaSelection) {
                setTask(createTaskArea())
                break
            }

            if (choice === "volume" && volumeSelection) {
                setTask(createTaskVolume())
                break
            }

            if (choice === "litres" && litresSelection) {
                setTask(createTaskLitres())
                break
            }       
            console.log(task)
        } while (true)
    }

    const redButton = () => {
        setScoreArray(scoreArray.map(e => "😭"))
        setScore(0)
    }

    const divStyle = {
        fontSize: "20px",
        letterSpacing: "1px"
    }

    return (
        <div className="Container">
            <h1>Drill n' kill: Units</h1>
            <hr />
            <div>

                <CheckBox label="Pituus" value={lengthSelection} onChange={setLengthSelection} />
                <CheckBox label="Pinta-ala" value={areaSelection} onChange={setAreaSelection} />
                <br/>
                <CheckBox label="Tilavuus" value={volumeSelection} onChange={setVolumeSelection} />
                <CheckBox label="Vetomitat" value={litresSelection} onChange={setLitresSelection} />
            </div>
            <br />
            <div style={divStyle}>
                {task["taskQuantity"]} <Unit unit={task["taskUnit"]} /> = <input size="10" type="text" value={inputAnswer} onKeyDown={e => handleKeyDown(e)} onChange={e => setInputAnswer(e.target.value)} /> <Unit unit={task["answerUnit"]} /><br />
                <br />
                <div>
                    <input type="button" className="button-7" value="Tarkista" onClick={() => checkAnswer(inputAnswer, task)} />
                </div>
                <br />
                <div>
                    <input type="button" className="button-red" value="Do not press this button!" onClick={() => redButton()} />
                </div>
            </div>
            <div>
                <h2>Drill Streak: {score}</h2>
            </div>

            <h2><Streak emojiArray={scoreArray} /></h2>
        </div>)
}

const createAnswerQuantity = () => {
    let finalQuantity = Math.floor((Math.random() * _.sample([10, 100, 100]))) * _.sample([10, 100])

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
    const units = {
        "km": 3,
        "hm": 2,
        "dam": 1,
        "m": 0,
        "dm": -1,
        "cm": -2,
        "mm": -3
    }
    return createTask(units, 1, 3, "length")
}

const createTaskLitres = () => {
    const units = {
        "L": 0,
        "dL": -1,
        "cL": -2,
        "mL": -3
    }
    return createTask(units, 1, 3, "litres")
}

const createTaskArea = () => {
    const units = {
        "km2": 3,
        "ha": 2,
        "a": 1,
        "m2": 0,
        "dm2": -1,
        "cm2": -2,
        "mm2": -3
    }
    return createTask(units, 2, 3, "area")
}

const createTaskVolume = () => {
    const units = {
        "m3": 0,
        "dm3": -1,
        "cm3": -2,
        "mm3": -3
    }
    return createTask(units, 3, 2, "volume")

}

const createTask = (units, exponent, maxDiff, type) => {

    const unitsList = Object.keys(units)
    const from = _.sample(unitsList)
    let to = ""
    let diff = 0
    do {
        do {
            to = _.sample(unitsList)
        } while (to === from)

        const fromExponent = units[from]
        const toExponent = units[to]
        diff = fromExponent - toExponent
    } while (Math.abs(diff) > maxDiff)

    const finalQuantity = createAnswerQuantity()
    let originalQuantity = 0

    if (diff > 0) {
        originalQuantity = finalQuantity * 10 ** (diff * exponent)
    } else {

        originalQuantity = finalQuantity / 10 ** (-diff * exponent)
    }
    const task = {
        taskQuantity: originalQuantity,
        taskUnit: to,
        answer: finalQuantity,
        answerUnit: from,
        type: type
    }
    console.log(task)
    return task
}


const Streak = ({ emojiArray }) => {
    const emojis = emojiArray.reduce((acc, cur) => acc + cur, "")
    return <div>{emojis}</div>
}

const CheckBox = ({ label, value, onChange }) => {

    return (
        <label>
            <input type="checkbox" checked={value} onChange={() => onChange(!value)} />
            {label}
        </label>
    )
}

export default UnitsDrill