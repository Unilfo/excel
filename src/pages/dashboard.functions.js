import {storage} from '@core/utils'

export function toHTML(key) {
	const model = storage(key)
	const id = key.split(':')[1]
	return `                
		<div class="db__record">
			<a href="#excel/${id}">${model.title}</a>
			<strong>01.01.2020</strong>
		</div>
	`
}

function getAllKeys() {
	const keys = []
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i)
		if (!key.includes('excel')) {
			continue
		}
		keys.push(key)
	}
	return keys
}

export function createRecordsTable() {
	const keys = getAllKeys()

	if (!keys.length) {
		return `<p>Вы пока не создали ни одной таблицы<p>`
	}

	return `
		<div class="db__list-header">
			<span>Название</span>
			<span>Дата открытия</span>
		</div>
		<div class="db__list">
			${keys.map(toHTML).join('')}
		</div>
	`
}
