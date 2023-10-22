import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='300f4c33-1304-4f64-a6bd-6f7cbf3d4354'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100% '}}
                />
        </div>
    )
}

export default ChatsPage;