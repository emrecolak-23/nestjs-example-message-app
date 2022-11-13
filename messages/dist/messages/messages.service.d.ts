import { MessagesRespository } from "./messages.repository";
export declare class MessagesService {
    messagesRepo: MessagesRespository;
    constructor(messagesRepo: MessagesRespository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
}
