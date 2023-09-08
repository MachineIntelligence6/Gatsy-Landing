

export interface ApiResponse<T = unknown> {
    data?: T | null;
    message: string;
    success: boolean;
}

export type AuthUser = {
    authorization: string;
    created?: Date;
    email: string;
    data?: {
        filter: boolean;
        industry: {
            id: number;
            industry: string;
            name: string;
        };
        keyword: string;
    };
    website?: string;
    username: string;
    password: string;
    package: string;
    phone: string;
    quota: number;
}


export type LoginApiResponse = ApiResponse<AuthUser>
export type ForgotPwdApiResponse = ApiResponse<null>
export type NewPwdApiResponse = ApiResponse<null>
export type EmailLoginApiResponse = ApiResponse<null>

export type SignUpApiResponse = ApiResponse<string>
export type UpdateProfileResponse = ApiResponse<{
    authorization: string;
    email: string;
    name: string;
    package: string;
    phone: string;
    website: string;
}>



export type TIndustry = {
    id: number,
    name: string
}

export type IndustryListApiResponse = ApiResponse<Array<TIndustry>>

export type KeywordApiResponse = ApiResponse<{
    filter: boolean;
    industry: {
        id: number;
        industry: string;
        name: string;
    },
    keyword: string;
}>

export type GenerateApiResponse = ApiResponse<string>
export type ArticlesApiResponse = ApiResponse<Array<Article>>


export type Article = {
    id: number;
    headline: string;
    summary: string;
    body: string;
    image: string;
    timestamp: Date;
}
