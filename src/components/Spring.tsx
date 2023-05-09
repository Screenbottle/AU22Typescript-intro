import { useState } from "react"

const unselectedColor: string = '#000000';
const selectedColor: string = '#F45869';

interface SpringSign {
    sign : string,
    sighted : boolean
}

const Spring = () => {

    const sign : SpringSign = { sign: 'grilla', sighted: false }

    const defaultSigns : SpringSign[] = [
        sign,
        {
            sign: 'pollen',
            sighted: false
        },
        {
            sign: 'blommor',
            sighted: true
        }
    ]

    const [springSigns, setSpringSigns]  = useState(defaultSigns);
    const [newSign, setNewSign] = useState('');

    const selectSign = ( sign : SpringSign, index : number ) => {

        let updatedSigns = [...springSigns]; // kopiera den gamla arrayen
        sign.sighted = !sign.sighted;
        updatedSigns[index] = sign;

        setSpringSigns(updatedSigns);

    }

    const handleAddSign = () => {
        setSpringSigns([...springSigns, {sign: newSign, sighted: false}]);
        setNewSign('');
    }

    const signElements = springSigns.map((sign, index) => (
        <div key={index} 
            style={{backgroundColor : sign.sighted ? selectedColor : unselectedColor}} 
            onClick={() => selectSign(sign, index)}
        >
            {sign.sign}
        </div>

    ));

    return (
        <div>
            <h2>Vårtecken</h2>
            <br/>
            {signElements}
            <br/>
            Fler vårtecken:
            <input type="text" onChange={event => {setNewSign(event.target.value)}} value={newSign}/>
            <button onClick={handleAddSign}>Lägg till</button>
        </div>
    )
}

export default Spring;