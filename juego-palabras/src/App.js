import './App.css';
import React, { useState } from "react";

function App() {
	const [value, setValue] = useState(1);
	const [input1, setInputValue1] = useState("");
	const [input2, setInputValue2] = useState("");
	const [input3, setInputValue3] = useState("");
	const [input4, setInputValue4] = useState("");
	const [input5, setInputValue5] = useState("");

	const listGenerator = () => {
		return (
			palabras.map((label) => (
				<a key={label.id}>
					<b>{label.desordenado}</b><br />
					<i>{label.ordenado}</i><br />
				</a>
			))
		)
	}
	const disWordGenerator = () => {
		const palabra_des = palabras[value].desordenado;
		return palabra_des
	}

	const ordWordGenerator = () => {
		const palabra_ord = palabras[value].ordenado;
		return palabra_ord
	}

	function arrayGenerator() {
		const longitud = ordWordGenerator().length
		const array_ord = []
		for (let index = 0; index < longitud; index++) {
			array_ord.push(ordWordGenerator()[index])
		}
		return array_ord
	}

	const [counter, setCounter] = useState(0)
	const [wincounter, setWincounter] = useState(0)
	const [message1, setMessage1] = useState("")
	const [message2, setMessage2] = useState("")
	const [message3, setMessage3] = useState("")
	const [message4, setMessage4] = useState("")
	const [message5, setMessage5] = useState("")

	const handleInputChangue1 = (event) => {
		setInputValue1(event.target.value.toUpperCase())
	}
	const handleInputChangue2 = (event) => {
		setInputValue2(event.target.value.toUpperCase())
	}
	const handleInputChangue3 = (event) => {
		setInputValue3(event.target.value.toUpperCase())
	}
	const handleInputChangue4 = (event) => {
		setInputValue4(event.target.value.toUpperCase())
	}
	const handleInputChangue5 = (event) => {
		setInputValue5(event.target.value.toUpperCase())
	}

	function correcto() {
		return <p style={{ color: "green", fontWeight: "bold" }}>correcto</p>
	}

	function incorrecto() {
		return <p style={{ color: "red", fontWeight: "bold" }}>incorrecto</p>
	}

	const errorCounter1 = () => {
		if (input1 !== "") {
			if (input1 === arrayGenerator()[0]) {
				setMessage1(correcto())
			} else {
				setMessage1(incorrecto())
				setCounter(counter + 1);
			}
		}
	}
	const errorCounter2 = () => {
		if (input2 !== "") {
			if (input2 === arrayGenerator()[1]) {
				setMessage1(correcto())
			} else {
				setMessage1(incorrecto())
				setCounter(counter + 1);
			}
		}
	}
	const errorCounter3 = () => {
		if (input3 !== "") {
			if (input3 === arrayGenerator()[2]) {
				setMessage1(correcto())
			} else {
				setMessage1(incorrecto())
				setCounter(counter + 1);
			}
		}
	}
	const errorCounter4 = () => {
		if (input4 !== "") {
			if (input4 === arrayGenerator()[3]) {
				setMessage1(correcto())
			} else {
				setMessage1(incorrecto())
				setCounter(counter + 1);
			}
		}
	}
	const errorCounter5 = () => {
		if (input5 !== "") {
			if (input5 === arrayGenerator()[4]) {
				setMessage5(correcto())
				setValue(Math.floor(Math.random() * (9 - 0 + 1)) + 0)
				setInputValue1("")
				setInputValue2("")
				setInputValue3("")
				setInputValue4("")
				setInputValue5("")
				setMessage1("")
				setMessage2("")
				setMessage3("")
				setMessage4("")
				setMessage5("")
				setWincounter(wincounter + 1)
			} else {
				setMessage5(incorrecto())
				setCounter(counter + 1);
			}
		}
	}
	console.log(counter)

	const clear = () => {
		if (input1 || input2 || input3 || input4 || input5 != "") {
			setInputValue1("")
			setInputValue2("")
			setInputValue3("")
			setInputValue4("")
			setInputValue5("")
		}
	}

	const reset = (e) => {
		setValue(Math.floor(Math.random() * (9 - 0 + 1)) + 0)
	}

	function setter() {
		if (counter > 3) {
			return ("Perdiste")
		}
	}

	function winsetter() {
		if (wincounter > 7) {
			return ("Ganaste")
		}
	}

	function handleEnter(event) {
		console.log(event.key)
		if (event.key === "Enter") {
			const form = event.target.form;
			const index = [...form].indexOf(event.target);
			console.log(index)
			form[index + 1].focus();
			event.preventDefault();
		}
	}

	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<p style={{ fontWeight: "bold" }}>Palabra desordenada: {disWordGenerator()}</p>
				<p style={{ fontWeight: "bold" }}>Palabra ordenada: {ordWordGenerator()}</p>
				<p>Errores: {counter}</p>
				<p>Rondas ganadas: {wincounter}</p>
				<form>
					<input value={input1} maxLength={1} onChange={handleInputChangue1} onBlur={errorCounter1} onKeyDown={(e) => handleEnter(e)} />
					<input value={input2} maxLength={1} onChange={handleInputChangue2} onBlur={errorCounter2} onKeyDown={(e) => handleEnter(e)} />
					<input value={input3} maxLength={1} onChange={handleInputChangue3} onBlur={errorCounter3} onKeyDown={(e) => handleEnter(e)} />
					<input value={input4} maxLength={1} onChange={handleInputChangue4} onBlur={errorCounter4} onKeyDown={(e) => handleEnter(e)} />
					<input value={input5} maxLength={1} onChange={handleInputChangue5} onKeyDown={errorCounter5} />
					<p style={{ wordSpacing: 1 }}>{message1}</p>
				</form>
				<button onClick={clear}>Clear</button>
				<button onClick={reset}>Reset</button> <br></br>
				<span style={{ color: "Red", fontSize: "24px", fontWeight: "bolder" }}>{setter()}</span><br />
				<span style={{ color: "green", fontSize: "24px", fontWeight: "bolder" }}>{winsetter()}</span><br />
				<br></br>
				{/* <div>{listGenerator()}</div> <br></br> */}
			</div>
		</div>

	);
}

const palabras = [{
	id: 1,
	ordenado: "CINCO",
	desordenado: "NICCO"
},
{
	id: 2,
	ordenado: "ABETO",
	desordenado: "BAETO"
},
{
	id: 3,
	ordenado: "ACTOR",
	desordenado: "AORCT"
},
{
	id: 4,
	ordenado: "BICHO",
	desordenado: "HOCIB"
},
{
	id: 5,
	ordenado: "BUENO",
	desordenado: "BOUEN"
},
{
	id: 6,
	ordenado: "CABRA",
	desordenado: "ACBAR"
},
{
	id: 7,
	ordenado: "CAMPO",
	desordenado: "CMPOA"
},
{
	id: 8,
	ordenado: "CERCA",
	desordenado: "ECRAC"
},
{
	id: 9,
	ordenado: "DADOS",
	desordenado: "OSDDA"
},
{
	id: 10,
	ordenado: "FERIA",
	desordenado: "IEFAR"
}]


export default App;
