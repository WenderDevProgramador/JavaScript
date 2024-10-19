import {Component} from "./Component.js"
import { Form } from  "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"

const title = new Component('h1','body', { textContent: 'Olá, Mundo!'})
title.render()
title.tag = 'h3'
console.log(title)
title.build().render()

const form = new Form('body')

const label = new Label('Nome:',form, { htmlFor: 'nameInput'})
const input = new Input(form, {id: 'nameInput',name: 'name'})

form.render()
label.render()

form.addChildren(input)

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data De Nascimento:',form, {htmlFor: 'birthdayInput'}),
    new Input(form, {id: 'birthdayInput', name: 'birthday'})
)