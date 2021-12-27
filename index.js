const createStore = require('./createStore')
const rootReducer = require('./redux/rootReducer')

const store = createStore(rootReducer, 0)


console.log(store.getState())

