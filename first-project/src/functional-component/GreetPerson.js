let GreetPerson = (props) => {
    
    function greet(){
        console.log(props.message);
    }
    return(
        <button onClick={greet}>Greet</button> 
    );
}
export default GreetPerson;