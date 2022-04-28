import "styled-components"

declare module "styled-components" {
    export interface DefaultTHeme {
        borderRadius: string

        colors: {
            main: string
            secondary: string
        }
    }
}