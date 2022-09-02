import { User } from "./user";

export interface Session {
    activeSession: boolean,
    user?: User
}