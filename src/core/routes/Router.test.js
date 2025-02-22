import {Router} from './Router'
import {Page}   from '../page/Page'

class DashboardPage extends Page {
	getRoot() {
		const root = document.createElement('div')
		root.innerHTML = 'dashboard'
		return root
	}
}
class ExcelPage extends Page {}

describe('Router:', () => {
	let $root
	let router

	beforeEach(()=>{
		$root = document.createElement('div')
		router = new Router($root, {
			dashboard: DashboardPage,
			excel: ExcelPage
		})
	})

	test('should be define', () => {
		expect(router).toBeDefined()
	})

	// test('should render dashboard page', () => {
	// 	router.changePageHandler()
	// 	expect($root.innerHTML).toBe('<div>dashboard</div>')
	// })
})
