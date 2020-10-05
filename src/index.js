import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Formula} from '@/components/formula/Formula';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Table} from '@/components/table/Table';
import './scss/index.scss'
import {CreateStore} from '@core/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {storage} from '@core/utils';
import {initialState} from '@/redux/initialState'

const store = new CreateStore(rootReducer, initialState)

store.subscribe(state => {
    storage('excel-state', state)
})

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
})

excel.render()
