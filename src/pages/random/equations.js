import * as React from 'react'
import '../../components/layout.css'
const _ = require('lodash');
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
            ["Leevin omenoidan määrä on _ Jaanan omenoiden lukumäärään nähden.", ["kaksinkertainen", "kolminkertainen", "nelinkertainen"], [2, 3, 4], (n, k) => n * k],
            ["Jaanalla on _ omenaa vähemmän kuin Leevillä.", ["kaksi", "kolme", "neljä"], [2, 3, 4], (n, k) => n + k],
            ["Jaanalla on _ omenaa enemmän kuin Leevillä.", ["kaksi", "kolme", "neljä"], [2, 3, 4], (n, k) => n - k]
        ]

        const options2 = [
            ["Elisalla on _ omenaa enemmän kuin Jaanalla.", ["kolme", "neljä", "viisi"], [3, 4, 5], (n, k) => n + k],
            ["Elisan omenoiden lukumäärä on _ Jaanan omenoiden lukumäärään nähden.", ["kaksinkertainen", "kolminkertainen", "nelinkertainen"], [2, 3, 4], (n, k) => n * k], 
        ]

        const option = choose(options)
        const idx = getRandomIndex(option[1])
        const str = option[0].replace('_', option[1][idx])
        const k = option[2][idx]
        const f = option[3]
        const leevi = f(jaana, k)
        

        const option2 = choose(options2)
        const idx2 = getRandomIndex(option2[1])
        const str2 = option2[0].replace('_', option2[1][idx2])
        const k2 = option2[2][idx2]
        const f2 = option2[3]
        const elisa = f2(jaana, k2)

        const sumStr = sumString.replace('_', jaana + leevi + elisa)
        const resStr = choose([<> {str} {str2} </>, <> {str2} {str} </> ])
        return (
            <div>
                <div>{sumStr} {resStr} Laske Leevin ja Jaanan omenoiden lukumäärät.</div>
                <div>(ratkaisu: Jaana: {jaana}, Leevi: {leevi}, Elisa: {elisa})</div>
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