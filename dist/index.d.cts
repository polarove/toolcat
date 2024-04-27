declare enum DATE_FORMAT {
    YEAR = "YYYY-MM-DD HH:mm:ss",
    DAY = "DD [\u5929] HH:mm:ss",
    HOUR = "HH:mm:ss"
}
declare enum TIMEZONE {
    DEFAULT = "Asia/Shanghai",
    SHANGHAI = "Asia/Shanghai"
}
declare enum TIME_CATEGORY {
    DAY = "day",
    HOUR = "hour",
    MINUTE = "minute",
    SECOND = "second"
}

declare enum UNICODE {
    BLANK_SPACE = " "
}

declare type Voidable<T> = T | null | undefined;
declare type Nullable<T> = T | null;

export { DATE_FORMAT, type Nullable, TIMEZONE, TIME_CATEGORY, UNICODE, type Voidable };
