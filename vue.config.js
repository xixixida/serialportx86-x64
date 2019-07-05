module.exports = {
  pluginOptions: {
    electronBuilder: {
      externals: [
        "serialport",
      ],
      builderOptions: {
        "appId": "com.hterobot.dblock.bate",
        "productName": "DouBao编程软件",
        "copyright": "Copyright © year 北京哈工科教机器人科技有限公司",
        "asar": false,
        "publish": {
          "provider": "generic",
          "url": "https://doubaobit.oss-cn-beijing.aliyuncs.com/scratch/"
        },
        "win": {
          "target": [
            {
              "target": "nsis",
              "arch": [
                "x64",
                "ia32"
              ]
            }
          ]
        },
        "nsis": {
          "oneClick": false,
          "perMachine": true,
          "allowToChangeInstallationDirectory": true,
          "allowElevation": false
        },
        "mac": {
          "target": "dmg",
          "category": "public.app-category.tools"
        }
      }
    }
  }
}