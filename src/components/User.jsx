import "../assets/stylesheet/User.css"

function User({user, onUpdateUser, onSubmitForm}) {
    function onChange(e) {
        onUpdateUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="name">Name: </label>
                <input id={"name"}
                       name={"name"}
                       value={user.name}
                       onChange={onChange}/>
            </div>

            <div>
                <label htmlFor="expYears">Experience years: </label>
                <input id={"expYears"}
                       name={"expYears"}
                       type={"number"}
                       value={user.expYears}
                       onChange={onChange}/>
            </div>

            <div>
                <label htmlFor={"Feeling"}>Feeling: </label>
                <input id={"FeelingHappy"}
                       name={"feeling"}
                       type={"radio"}
                       value={"happy"}
                       checked={user.feeling === "happy"}
                       onChange={onChange}/>
                <label htmlFor={"FeelingHappy"}>Happy</label>
                <input id={"FeelingNormal"}
                       name={"feeling"}
                       type={"radio"}
                       value={"normal"}
                       checked={user.feeling === "normal"}
                       onChange={onChange}/>
                <label htmlFor={"FeelingNormal"}>Normal</label>
                <input id={"FeelingSad"}
                       name={"feeling"}
                       type={"radio"}
                       value={"sad"}
                       checked={user.feeling === "sad"}
                       onChange={onChange}/>
                <label htmlFor={"FeelingSad"}>Sad</label>
            </div>

            <hr/>
            <h1>Hello {user.name}, {user.expYears} as a developer and you're {user.feeling}!</h1>

            <button>Update user!</button>
        </form>
    )
}

export default User