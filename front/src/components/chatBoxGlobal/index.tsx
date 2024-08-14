'use client'
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { ChatMessage } from "../chatMessage";
import { IMessage } from "@/interfaces/interfaceRedux";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SendIcon from '@mui/icons-material/Send';

// Definir la URL aquí para evitar errores en el código JSX
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const ChatBoxglobal = () => {
    const [socket, setSocket] = useState<any>(null);
    const [historialChat, setHistorialChat] = useState<IMessage[]>([]);
    const [messageInput, setMessageInput] = useState("");
    const [catchhistory, setCatchhistory] = useState(false);

    const user = useSelector((state: RootState) => state.user.user);

    // SETEO DEL HISTORIAL DE MENSAJES
    useEffect(() => {
        // Crear una instancia de Socket.IO solo una vez
        const socketIo = io(`${apiUrl}`);
        setSocket(socketIo);

        console.log('Socket conectado', socketIo);

        // Emitir evento para obtener el historial del chat
        socketIo.emit('getChatHistory');

        // Escuchar el evento para recibir el historial del chat
        socketIo.on('chatHistory', (chatHistory) => {
            console.log('Chat history received:', chatHistory);
            setHistorialChat(chatHistory);
        });

        // Escuchar mensajes globales en tiempo real
        socketIo.on('globalMessage', (message) => {
            console.log('Global message received:', message);
            setHistorialChat((prevMessages) => [...prevMessages, message]);
        });

        // Limpiar al desmontar
        return () => {
            socketIo.disconnect();
        };
    }, [apiUrl]);

    const sendGlobalMessage = (nickname: string, content: string) => {
        if (socket) {
            socket.emit('sendGlobalMessage', { nickname, content });
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (messageInput === "") {
            toast.error("Message is required", {
                position: "top-right",
                duration: 1500
            });
        } else {
            const nickname = user?.nickname || "Anonymous";
            const content = messageInput;
            sendGlobalMessage(nickname, content);
            setMessageInput("");
        }
    };

    return (
        <div className="col-span-3 grid grid-cols-3">
            <div className="col-span-2 flex flex-col items-center">
                <h1 className="heading5 text-white">Global Chat</h1>
                <div className="flex flex-col gap-2 w-full h-full">
                    {historialChat.map((message) => (
                        <ChatMessage key={message.id} id={message.id} nickname={message.nickname} post={message.post} createdAt={message.createdAt} />
                    ))}
                </div>
                <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type message"
                        className="input"
                        value={messageInput}
                        onChange={handleChange}
                    />
                    <button className="iconButton w-fit"><SendIcon /></button>
                </form>
            </div>
        </div>
    );
};