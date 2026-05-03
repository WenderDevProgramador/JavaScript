import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component('h1', 'body', {textContent: 'Formulário'})
console.log(title)
title.render()

const form = new Form('body', {id: 'form'})
form.render()



const label = new Label('Nome: ', form, {htmlFor: 'name'})
label.render()

const input = new Input(form, {id: 'name', type: 'text'})
input.render()



