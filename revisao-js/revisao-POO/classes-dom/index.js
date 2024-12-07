import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Label } from "./Label.js";
import { Input } from "./Input.js";

const title =  new Component('h1','body', { textContent: 'Olá, mundo! '})

const div =  new Component('div','body')
const h3 =  new Component('h3','div', { textContent: 'Olá, mundo! '})

title.render()
div.render()
h3.render()

const form = new Form('div')
const label = new Label('Nome:', form, { htmlFor: 'nameInput'})
const input = new Input(form, { id: 'nameInput', name: 'name'})

form.render()
label.render()
form.addChildren(input)

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de nascimento:', form, { htmlFor: 'birthdayInput'}),
    new Input(form, { id:'birthdayInput', name: 'birthday'})
)