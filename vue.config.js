module.exports = {
  pages: {
    index: 'src/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.hunlongyu.zy',
        copyright: 'Copyright @ 2020 Hunlongyu',
        productName: 'ZY Player',
        publish: [
          {
            provider: 'github',
            owner: 'kitblue',
            repo: 'ZY-Player'
          }
        ],
        // 绿色版精简：打包后裁剪多余语言包
        afterPack: './build/after-pack.js',
        // 绿色版：包内附带 portable 目录，程序检测到后将用户数据写入程序目录下的 data
        extraFiles: [
          {
            from: 'build/portable',
            to: 'portable'
          }
        ],
        mac: {
          icon: 'build/icon/icon.icns',
          category: 'public.app-category.developer-tools',
          target: 'default',
          extendInfo: {
            LSUIElement: 1
          }
        },
        win: {
          icon: 'build/icons/icon.ico',
          target: '7z',
          artifactName: 'ZY-Player-${version}-win_${arch}-green.${ext}'
        },
        linux: {
          icon: 'build/icons/'
        }
      }
    }
  }
}
