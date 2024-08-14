import { IMessage } from "@/interfaces/interfaceRedux";


export const ChatMessage = (data: IMessage) => {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-start gap-1">
                <p className="text-lightViolet">{data.nickname}:</p>
                <p className="text-white">{data.post}</p>
                <p className="text-lightViolet">{data.createdAt}</p>
            </div>
        </div>
    )
}