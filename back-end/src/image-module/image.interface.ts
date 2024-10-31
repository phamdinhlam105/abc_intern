import { UUID } from "crypto";

export default interface Image {
    id: UUID;
    idArticle: UUID;
    describe: string;
    url: string;
    createDate:string;
}