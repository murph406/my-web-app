import React, { Component, createContext } from "react";


export const Context = createContext();

export class ThemeProvider extends Component {
    constructor() {
        super()

        this.themeListener = window.matchMedia("(prefers-color-scheme: dark)")

        this.state = {
            isDarkTheme: false,
            isAppReady: false
        }
    }

    componentDidMount() {
        const theme = this.getCurrentTheme()

        this.themeListener.addEventListener('change', (e) => {
            const newColorScheme = e.matches ? "dark" : "light";
            this.setState({ isAppReady: true, isDarkTheme: newColorScheme })
        })


        setTimeout(() => {
            this.setState({ isAppReady: true, isDarkTheme: theme })
        }, 500)
    }

    componentWillUnmount() {
        this.themeListener.removeEventListener()

    }

    getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

    render() {

        const { isDarkTheme, isAppReady } = this.state;
        const { children } = this.props;

        const value = {
            isDarkTheme: isDarkTheme,
            toggleTheme: () => this.toggleTheme()
        }

        return (
            <Context.Provider value={value}>
                {(isAppReady === false)
                    ? <div>Loading</div>
                    : children
                }
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;

export function withThemeContext(Component) {
    return function ThemeManager(props) {
        return (
            <Context.Consumer >
                {context => <Component {...props} themeContext={context} />}
            </Context.Consumer>
        )
    }
}