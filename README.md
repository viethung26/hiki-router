# hiki-router


## Installation

```sh
yarn add hiki-router
```

## Example

```jsx
import React from 'react'
import Router, { Route, Link } from 'hiki-router';

function Example() {
    return (
        <Router>
            <nav>
                <Link to="/">a</Link><br/>
                <Link to="/b">b</Link><br/>
                <Link to="/c">c</Link>
            </nav>
            <Route pathName='/' component={ <ComponentA /> }></Route>
            <Route pathName='/b' component={ <ComponentB /> }></Route>
            <Route pathName='/c' component={ <ComponentC /> }></Route>
        </Router>
    )
}
```