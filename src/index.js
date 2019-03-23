import React, {Component} from 'react'

export const RouterContext = React.createContext("")
export default class Router extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: '/'
        }
    }
    componentDidMount() {
        window.addEventListener("popstate", () => {
            this.forceUpdate()
        })
    }
    componentWillUnmount() {
        window.removeEventListener("popstate", () => {
            this.forceUpdate()
        })
    }
    setPath = path => {
        window.history.pushState({}, "", path)
        this.setState({path})
    }
    render() {
        return (
            <RouterContext.Provider value={ this.setPath }>
                { React.Children.map(this.props.children, child => {
                return React.cloneElement(child)
            }) }
            </RouterContext.Provider>
                
        )
    }
}
export class Route extends Component {
    render() {
        const {pathName, component} = this.props
        return (pathName === window.location.pathname) && component
    }
}

export class Link extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {setPath => (
                    <button onClick={() => setPath(this.props.to)}>Link {this.props.children}</button>
                )}
            </RouterContext.Consumer>
        )}
}