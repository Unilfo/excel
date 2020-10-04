import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Formula} from '@/components/formula/Formula';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Table} from '@/components/table/Table';
import './scss/index.scss'
import {CreateStore} from '@core/createStore';
import {rootReducer} from '@/redux/rootReducer';

const store = new CreateStore(rootReducer, {
    colState: {}
})

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
})

excel.render()
