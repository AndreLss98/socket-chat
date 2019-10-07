interface Message {
    message: string;
    userName: string;
}
export interface PrivateChat {
    privateChatId: string;
    chatName: string;
    messages: Message[];
}