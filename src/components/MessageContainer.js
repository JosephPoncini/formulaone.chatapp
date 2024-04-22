const MessageContainer = ({ messages }) => {
    return <div>
        {
            messages.map((msg, index) => 
            <table>
                <tr key={index}>
                    <span>{msg.msg} -</span>
                    <span className="fw-bold">{msg.username}</span>
                </tr>
            </table>)
        }
    </div>
}

export default MessageContainer;