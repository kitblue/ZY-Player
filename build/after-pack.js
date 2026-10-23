// 绿色版精简：仅保留中英界面语言包，其余 Electron locale 删除
const fs = require('fs')
const path = require('path')

const KEEP = new Set(['zh-CN.pak', 'zh-TW.pak', 'en-US.pak', 'en-GB.pak'])

module.exports = async function afterPack (context) {
  if (context.electronPlatformName !== 'win32') return
  try {
    const localesDir = path.join(context.appOutDir, 'locales')
    if (!fs.existsSync(localesDir)) return
    const all = fs.readdirSync(localesDir)
    const removed = []
    for (const name of all) {
      if (!name.endsWith('.pak')) continue
      if (KEEP.has(name)) continue
      fs.unlinkSync(path.join(localesDir, name))
      removed.push(name)
    }
    console.log(`[locales] kept ${all.length - removed.length}, removed ${removed.length}`)
  } catch (err) {
    console.warn('[locales] trim skipped:', err && err.message)
  }
}
