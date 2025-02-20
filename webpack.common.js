const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let htmlPages = [
    "accessible-quiz", "admin-dashboard", "admin-dashboard2",
    "balance-sheet", "tictactoe",
    "calculator", "cats", "cats-two", "city", "coffee-shop",
    "example", "ferris-wheel", "form", "magazine", "markers",
    "nutrition-label", "penguin", "piano", "picasso",
    "restaurant", "rothko"
];

let wpPluginsForPages = htmlPages.map(page => {
    const wordsForTitle = page.split("-");
    const capitalizedWords = wordsForTitle.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const finalTitle = capitalizedWords.join(" ");

    let templatePath = "./src/content/pages/" + page + ".html";

    return new HtmlWebpackPlugin({
        title: finalTitle,
        template: templatePath,
        filename: page + ".html",
        chunks: [page.replace(/-/g, ""), "index"]
    });
});

let entryPoints = {};

for (const page of htmlPages) {
    const pageProp = page.replace(/-/g, "");
    let importPath = "./src/content/assets/js/" + page + ".js";

    entryPoints[pageProp] = path.resolve(__dirname, importPath);
}

module.exports = {
    entry: {
        index: path.resolve(__dirname, "./src/index.js"),
        about: path.resolve(__dirname, "./src/content/assets/js/about/about.js"),
        todo: path.resolve(__dirname, "./src/content/assets/js/todo/todo.js"),
        ...entryPoints,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/content/pages/about.html",
            filename: "about.html",
            chunks: ["about", "index"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/content/pages/todo.html",
            filename: "todo.html",
            chunks: ["todo", "index"]
        }),
        ...wpPluginsForPages
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    optimization: {
        runtimeChunk: "single",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            }
        ]
    }
};