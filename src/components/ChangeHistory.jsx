function ChangeHistory({history}) {
    return (
        <div>
            <h2>Change History</h2>
            {history.map((change, index) => (
                <li key={index}>{change}</li>
            ))}
        </div>
    )
}

export default ChangeHistory