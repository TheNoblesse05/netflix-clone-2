'use client'

import { ReactNode, createContext } from "react"

export const GlobalContext = createContext(null)

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function GlobalState({children}:Props) {
    return <GlobalContext.Provider value={null}>{children}</GlobalContext.Provider>
}