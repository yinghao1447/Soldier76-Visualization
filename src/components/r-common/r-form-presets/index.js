const types = {
    Input: {
        amount: () => import('./amount.js')
    }
}

export default async function (cfg) {
    const presets = types[cfg.type]
    if (!presets) return Error(`未找到 ${cfg.type} 类型的预设配置`)
    if (!cfg.preset) return

    const preset = presets[cfg.preset]
    if (!preset) return Error(`未找到 ${cfg.type} 类型的 ${cfg.preset} 预设配置`)

    cfg.props ??= {}
    cfg.slots ??= {}

    // 通用预设配置 (如果有就执行)
    if (presets.common) {
        const commonPresetFn = (await presets.common()).default
        const res = await commonPresetFn(cfg)
        if (res instanceof Error) {
            return Error(`${cfg.type} 类型的通用预设配置 ${cfg.preset} 执行失败：${res.message}`)
        }
    }

    const presetFn = (await preset()).default
    const res = await presetFn(cfg)

    if (res instanceof Error) {
        return Error(`${cfg.type} 类型的预设配置 ${cfg.preset} 执行失败：${res.message}`)
    } else {
        return res
    }
}
