import React from 'react'

const Hello = () => {
    // With the JSX=> JavaScript XML
    // return (
    //     <h1>Hello World</h1>
    // )

    /*Without JSX CreateElement is used to display the html
    */
    /**
     * @description: Without JSX CreateElement is used to display the html
     * @params : 1. First HTML tag to be rendered, 2.optional properties,3. children for html element.
     */

    return React.createElement('div',
        { id: 'div1',className: 'dummy' },
        React.createElement('h1', null, 'Hello World')
    )

}

export default Hello