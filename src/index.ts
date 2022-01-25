import axios from "axios"
import { JSDOM } from "jsdom"

const { window } = new JSDOM("")
const $ = require("jquery")(window)

async function getTexts() {
	console.time()
	const response = await axios.get("https://dolarhoje.com/")

	const inputs = $(response.data).find("input[type='text']")

	const parsedCurrencyValues = {
		dolar: $(inputs[0]).attr("value"),
		real: $(inputs[1]).attr("value"),
	}

	console.log(
		`$${parsedCurrencyValues.dolar} to R$${parsedCurrencyValues.real}`
	)

	console.timeEnd()
}

getTexts()
