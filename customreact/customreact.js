function customRender(reactElement,mainContainer){
    /*
    const domElem = document.createElement(reactElement.type)
    domElem.innerHTML = reactElement.children

    domElem.setAttribute('href', reactElement.props.href)
    domElem.setAttribute('target', reactElement.props.target)

    mainContainer.appendChild(domElem)
    */
    const domElem = document.createElement(reactElement.type)
    domElem.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElem.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElem)

}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)