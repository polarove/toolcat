export class DateTool {
    /**
     * @param locale 语言，可选，默认为"zh-CN"
     * @return 2024/09/29 20:51:23
     */
    static getCurrentDatetimeString = (locale: string = 'zh-CN') => {
        return new Date().toLocaleString(locale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }
}
