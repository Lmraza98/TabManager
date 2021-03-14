module.exports = function (api) {
    api.cache(true);
  
    const presets = [[ "@babel/preset-env",
    {
        "useBuiltIns": "entry"
    }]
    ];
    const plugins = ["@babel/plugin-transform-runtime"]
  
    return {
      presets,
      plugins,
      sourceType: "unambiguous",
    };
  }
  