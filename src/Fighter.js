const Fighter = ({ name }) => {
    return (
        <div className="fighter"
        style={{backgroundImage: `url("https://tk7.tekken.com/assets/images/fighters-final/${name.toLowerCase()}-standard/profile-tablet.png")`}}>

        </div>
    )
}

export default Fighter;