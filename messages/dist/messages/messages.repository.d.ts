export declare class MessagesRespository {
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(message: string): Promise<void>;
}
