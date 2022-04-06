const FighterScreen = ({ isVisible, setVisible, selectedCharacter }) => {
    return(
        <div onClick={() => { return null }} className="fighter-screen" style={{display: isVisible ? "block" : "none"}}>
            <a href='#' className="close-button" onClick={() => {setVisible(false)}}>[x]</a>
            <span className="name-bg"> {selectedCharacter.name}</span>
            <h2 className="name-fg">{selectedCharacter.name}</h2>
            <img className="char-portrait" src={`https://tk7.tekken.com/assets/images/fighters-final/${selectedCharacter.name.toLowerCase()}-standard/profile-tablet.png`}/>
        </div>
    )
}

export default FighterScreen;