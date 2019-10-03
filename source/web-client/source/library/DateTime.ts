export class DateTime {
    static UTCToLocal(date: Date): Date {
        const newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
        const offset = date.getTimezoneOffset() / 60;
        const hours = date.getHours();
    
        newDate.setHours(hours - offset);
    
        return newDate;   
    }

    static LocalToUTC(date: Date) : Date {
        const now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        return new Date(now_utc);
    }
}