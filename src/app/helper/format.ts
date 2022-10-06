export interface locals {
    currentSession: CurrentSession;
    expiresAt: number;
}
interface CurrentSession {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    expires_at: number;
}