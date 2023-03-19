export interface IapiResponseResult {
    data: {
        id: number | null,
        login: string | null,
        email: string | null
        photos: { large: string, small: string }
    },
    resultCode: ResultCodesEnum | ResultCodeForCaptch,
    fieldsErrors?: any[],
    messages?: string[]
}
export interface IinitialStateApp {
    initialized: boolean
}

export interface ImyAuthData {
    email: string
    password: string
    rememberMe: boolean
}

export interface IinitialStateAuth {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    isError: boolean,
    errorMessage?: string[] | null,
    captcha?: string | null
}

export interface IinitialStateDialogs {
    dialogs: {
        id: number
        name: string
    }[]
    messages: string[]
    newMessageBody: string
}


// export interface ImyProfileInfoThunk {
//     aboutMe: string
//     contacts: {
//         facebook: string
//         github: string
//         instagram: string
//         mainLink: string
//         twitter: string
//         vk: string
//         website: string
//         youtube: string
//     }
//     fullName: string
//     lookingForAJobDescription: string
//     lookingForAjob: boolean
// }

export interface Icomponent {
    (props: any): JSX.Element
}

export interface IpageSizAndNumber {
    error: number | null
    items: Iusers[]
    totalCount: number
}

export interface Iusers {
    name: string | null,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        large: string | null
        small: string | null
    },
    status: string | null
    followed: boolean
}

export interface IinitialStateUsers {
    users: Iusers[]
    pageSize: number
    // pages: number[]
    totalUsersCount: number,
    pageNumber: number,
    isFetching: boolean,
    followingInProgress: number[],
    filter: IUsersFilter
}


export interface IUsersFilter {
    term: string
    friend: null | boolean
}

export interface IprofileInfo {
    aboutMe: string
    contacts: Iconstacts
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string
        large: string
    }
    userId: number | null
}

export interface Iconstacts {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}

export interface IinitialStateProfile {
    isFetching: boolean
    profile: IprofileInfo
    myProfile: IprofileInfo
    status: string
    posts: InewPost[]
    editMode: boolean
    error: string | null
}

export interface InewPost {
    id: number
    message: string
}

// export interface InewPostPrint {
//     message: string
// }

export interface IusersProps {
    totalItemsCount: number
    // pagesCount: number
    pageSize: number
    pageNumber: number
    isFetching: boolean
    users: Iusers[]
    followingInProgress: number[],
    portionSize: number
    // onPageChanged: (pageNumber: number) => void
    filter: IUsersFilter
}

export interface ILogin {
    errorCodeFromAPI: boolean
    errorMessageFromAPI: string[] | null | undefined
    captchaFromAPI: string | null | undefined
}

export interface IMyProfileInfoProps {
    onMainPhotoSelected: (e: any) => void
    profileErr: string | null
    profile: IprofileInfo
    myId: number
    editMode: boolean
}
export interface IProfileInfoProps {
    onMainPhotoSelected: (e: any) => void
    profileErr: string | null
    profile: IprofileInfo
}

export interface IMyPosts {
    onPostChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onAddPost: () => void
    sendMessageEvent: (e: any) => void
    newPostText: string
}

export interface IChatMessageAPI {
    message: string
    photo: string
    userId: number
    userName: string
}

// export interface IChatMessageAPI {
//     message: string
//     photo: string
//     userId: number
//     userName: string
// }






// export interface IInitialstateNews {
//     data2: INewsResult
//     error: any
//     isLoading: boolean
// }
// export interface IInitialstateNews {
//     data: INewsResult
//     error: FetchBaseQueryError | SerializedError
//     isLoading: boolean
// }


export interface Source {
    id: string;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    id: string
}

export interface INewsResult {
    status: string;
    totalResults: number;
    articles: Article[];
    // isFetching?: boolean
}
// export interface INewsResult2 {
//     status: string;
//     totalResults: number;
//     articles: Article[];
// }






// export interface INewsResponse {
//     declare module namespace {

//         export interface RelatedUrl {
//             suggested_link_text: string;
//             url: string;
//         }

//         export interface Multimedia {
//             url: string;
//             format: string;
//             height: number;
//             width: number;
//             type: string;
//             subtype: string;
//             caption: string;
//             copyright: string;
//         }

//         export interface Result {
//             slug_name: string;
//             section: string;
//             subsection: string;
//             title: string;
//             abstract: string;
//             uri: string;
//             url: string;
//             byline: string;
//             thumbnail_standard: string;
//             item_type: string;
//             source: string;
//             updated_date: Date;
//             created_date: Date;
//             published_date: Date;
//             first_published_date: Date;
//             material_type_facet: string;
//             kicker: string;
//             subheadline: string;
//             des_facet: string[];
//             org_facet: string[];
//             per_facet: string[];
//             geo_facet: string[];
//             related_urls: RelatedUrl[];
//             multimedia: Multimedia[];
//         }

//         export interface RootObject {
//             status: string;
//             copyright: string;
//             num_results: number;
//             results: Result[];
//         }

//     }


// }

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptch {
    CaptchaIsRequired = 10
}