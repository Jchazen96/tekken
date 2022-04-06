const Fighter = ({ name, color, setVisible, setSelectedCharacter }) => {
    return (
        <div onClick={() => {
            setSelectedCharacter({name: name, color: color})
            setVisible(true)
        }}

        className="fighter"
        style={{backgroundColor: color, backgroundImage: `url("https://tk7.tekken.com/assets/images/fighters-final/${name.toLowerCase()}-standard/profile-tablet.png")`}}>
        <h4>{name}</h4>
        </div>
    )
}

export default Fighter;