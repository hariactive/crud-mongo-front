module.exports={
    resolve:{
        fallback:{
            "url": false,
            "url": require.resolve("url/"),
            "path": require.resolve("path-browserify")
        },
    },
};