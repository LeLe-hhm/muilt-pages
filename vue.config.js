module.exports = {
  assetsDir: "static",
  productionSourceMap: false,
  pages: {
    index: {
      entry: "src/pages/index/index.ts",
      template: "public/index.html",
      filename: "index.html"
    },
    second: {
      entry: "src/pages/second/index.ts",
      template: "public/index.html",
      filename: "second.html"
    },
    thrid: {
      entry: "src/pages/thrid/index.ts",
      template: "public/index.html",
      filename: "thrid.html"
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
    // 移除 preload 插件
    config.plugins.delete("preload");
  },
  css: {
    // 配置高于chainWebpack中关于css loader的配置
    // modules: true, // 是否开启支持‘foo.module.css’样式
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: {
      // css预设器配置项
      css: {
        data: `@import "@/assets/css/base.css";`
      }
    }
  }
};
