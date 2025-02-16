const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const letterToUpperCase = (letter) => {
    return letter.toUpperCase();
};
let htmlPages = [
    "accessible-quiz", "admin-dashboard", "admin-dashboard",
    "balance-sheet", "tictactoe",
    "calculator", "cats", "cats-two", "city", "coffee-shop",
    "example", "ferris-wheel", "form", "magazine", "markers",
    "nutrition-label", "penguin", "piano", "picasso",
    "restaurant", "rothko"
];
let wpPluginsForPages = htmlPages.map(page => {
    const wordsForTitle = page.split("-");
    let capitalizedWords = [];
    let finalTitle = "";

    wordsForTitle.forEach(word => {
        let capitalizedWord = word.replace(/^a-z/, letterToUpperCase);

        capitalizedWords.push(capitalizedWord);
    });

    finalTitle = wordsForTitle.join(" ");
    let templatePath = "./src/content/pages/" + page + ".html";

    return new HtmlWebpackPlugin({
        title: finalTitle,
        template: templatePath,
        filename: page + ".html",
        chunk: [page]
    });
});
let entryPoints = {};

for (const page of htmlPages) {
    const pageProp = page.replace("-", "");
    let importPath = "./src/content/assets/js/" + page + ".js";

    entryPoints[pageProp] = {
        import: path.resolve(__dirname, importPath),
        dependOn: "shared"
    };
};

module.exports = {
    entry: {
        index: {
            import: path.resolve(__dirname, "./src/index.js"),
            dependOn: "shared"
        },
        todo: {
            import: path.resolve(__dirname, "./src/projects/todo/todo.js"),
            dependOn: "shared"
        },
        rothko: {
            import: path.resolve(__dirname, "./src/projects/js/rothko.js"),
            dependOn: "shared",
        },
        ...entryPoints,
        shared: "lodash",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunk: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/content/pages/todo.html",
            filename: "todo.html",
            chunk: ["todo"]
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
                use: ["css-loader"],
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
