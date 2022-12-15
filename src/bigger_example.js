import { h, Component, render } from './preact.module.js'
import htm from './htm.module.js'

const html = htm.bind(h)

function formatIt(text) {
    // pull out the parts
    const main_parts = text.split('{{')
    const helper_parts = main_parts[1].split('}}')
    const helper_tokens = helper_parts[0].split(' ')
    // grab the word and updated if necessary
    let word = helper_tokens[1]
    if (helper_tokens[0] === 'screamingCase') {
        word = word.toUpperCase()
    }
    // send it all back
    return `${main_parts[0]}${word}${helper_parts[1]}`
}

function App(props) {
    const words = 'the quick {{screamingCase brown}} fox'

    return html` <div>
        <h1>Hello ${props.name}!</h1>
        <p>${formatIt(words)}</p>
    </div>`
}

render(html`<${App} name="HERE" />`, document.body)
