// // import React, { Component } from 'react' 
// import { Component } from 'react' 

// import { withRouter } from 'react-router'

// class ScrollToTop extends Component { 
//     componentDidUpdate(prevProps) { 
//         if (this.props.location !== prevProps.location) { 
//             window.scrollTo(0, 0) 
//         } 
//     }
    
//     render() { 
//         return this.props.children 
//     } 
// } 

// export default withRouter(ScrollToTop)

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}


