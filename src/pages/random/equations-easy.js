import * as React from 'react'
import '../../components/layout.css'
const _ = require('lodash');

/**
 * This must be the ugliest code I've ever written and I deserve a reward!
 * 
 */
const EquationsPage = () => {

    function choose(choices) {
        var index = Math.floor(Math.random() * choices.length);
        return choices[index];
    }
    function getRandomIndex(choices) {
        return Math.floor(Math.random() * choices.length);
    }
    function getRandomInRange(min, max) {
        const d = Math.floor(Math.random() * (max - min))
        return min + d
    }
    

    const Task = () => {
        const jaana = getRandomInRange(5, 15)

        const sumString = "Leevillä, Jaanalla ja Elisalla on yhteensä _ omenaa."
        const options = [
            ["Leevillä on _ omenaa enemmän kuin Jaanalla.", ["kolme", "neljä", "viisi"], [3, 4, 5], (n, k) => n + k],
            ["Leevin omenoiden määrä on _ Jaanan omenoiden lukumäärään nähden.", ["kaksinkertainen", "kolminkertainen", "nelinkertainen"], [2, 3, 4], (n, k) => n * k],
            ["Jaanalla on _ omenaa vähemmän kuin Leevillä.", ["kaksi", "kolme", "neljä"], [2, 3, 4], (n, k) => n + k],
            ["Jaanalla on _ omenaa enemmän kuin Leevillä.", ["kaksi", "kolme", "neljä"], [2, 3, 4], (n, k) => n - k]
        ]

        const option = choose(options)
        const idx = getRandomIndex(option[1])
        const str = option[0].replace('_', option[1][idx])
        const k = option[2][idx]
        const f = option[3]
        const leevi = f(jaana, k)
        const sumStr = sumString.replace('_', jaana + leevi)
        return (
            <div>
                <div>{sumStr} {str} Laske Leevin ja Jaanan omenoiden lukumäärät.</div>
                <div>(ratkaisu: Jaana: {jaana}, Leevi: {leevi})</div>
                <br/>
            </div>
        )
    }

    const tasks = _.range(1000).map(i => <Task/>)

    return (
     <div class="Container">
         {tasks}
     </div>
    )
}

export default EquationsPage