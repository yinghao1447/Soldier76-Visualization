import numeral from 'numeral'

export default async function (cfg) {
    let target = null
    let isFocus = false

    cfg.slots.append ??= () => '元'
    cfg.props.parser ??= str => String(~~(numeral(str).value() * 100))
    cfg.props.formatter ??= num => {
        if (['', null, undefined, NaN].includes(num)) return ''
        if (isFocus) return target.value
        return numeral(num / 100).format('0,0.00')
    }

    cfg.props.onFocus ??= e => {
        target = e.target
        isFocus = true
        e.target.value = numeral(e.target.value).value()
    }

    cfg.props.onBlur ??= e => {
        target = e.target
        isFocus = false
        e.target.value = numeral(e.target.value).format('0,0.00')
        e.target.dispatchEvent(new Event('input'))
    }
}
