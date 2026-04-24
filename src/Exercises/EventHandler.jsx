function EventExamples () {
    const handleClick = () => {
        console.log ('Button Clicked!');
    };

    const handleInput = () => {
        console.log ('Input value:', event.target.value);
    };

    const handleItemClick = (itemId) => {
        console.log ('Item Clickedd!:', itemId);
    };

    return (
        <div>
            
            <button onClick={handleClick}>Click Me!</button>
            
            <input onChange={handleInput} />
            
            <button onClick={() => handleItemClick(123)}>Item 123</button> 
            
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Form Submitted');
            }}>
            </form>
        </div>
    );
}

export default EventExamples;