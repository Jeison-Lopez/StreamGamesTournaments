export interface IUser {
    id: string
    email: string
    nickname: string
    tokenFirebase: string
    birthdate: string
    urlProfile: string
    urlSteam: string
    role: string
    state: boolean
    tournaments: ITournamentsregistered[]
    friends: IFriend[]
    sentFriendRequests: []
    sentMessages: []
    receivedMessages: []
    globalChat: []
}

interface IFriend {
    id: string
    email: string
    nickname: string
    tokenFirebase: string
    birthdate: string
    urlProfile: string
    urlSteam: string
    role: string
    state: boolean
    tournaments: ITournamentsregistered[]
    friends: []
    sentFriendRequests: []
    sentMessages: []
    receivedMessages: []
    globalChat: []
}

export interface ITeam {
    id: string
    name: string
    members: IUser[]
}

export interface ITournamentsregistered {
    id: string
    nameTournament: string
    startDate: string
}

// export interface ITeamMember {
//     id: string
//     nickName: string
// }


//register
export interface IRegisterForm {
    nickname: string;
    email: string;
    password: string;
    birthdate: string;
    tokenFirebase?: string
}

export interface IRegisterError {
    nickname?: string;
    email?: string;
    password?: string;
    birthdate?: string;
}

//login
export interface ILoginForm {
    email: string
    password: string
    tokenFirebase?: string
}

export interface ILoginDataBase {
    email: string,
    tokenFirebase?: string
}

export interface ILoginError {
    email?: string
    password?: string
}

//addfriends

export interface IUserSelector {
    id: string
    label: string
    email: string
    birthdate: string
    role: string
}

export interface IAddFriendForm {
    userId: string
    friendId: string
    token: string
}

//ugrade user

export interface IUpgradeUser {
    id: string
    token: string
}
