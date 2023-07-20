// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        console.log('Entering password...');
    }
    return (
        <div>
        <h2>Keypad</h2>
        <input type="password" onChange={handleChange} />
      </div>
    )
}

export default Keypad;