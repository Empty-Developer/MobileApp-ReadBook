import { ComponentType } from "react"

export interface IRoute {
    name: string
    component: ComponentType
}

export type MainTabParamList = {
    index: undefined
    library: undefined
    like: undefined
    user_profile: undefined
}

export type RootStackParamList = {
    '(main)': undefined
}