const path = require('path')

module.exports = {
    context: path.resolve(__dirname,'src'), //где лежат исходники
    mode: "development", // мод разработки
    entry: './index.js',  // точка входа для приложения
    output: {   // выходные параметры
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist')    //куда складывать
    }

}
