import { format } from "date-fns";

export class DateHelper {
    static formatDate(date: Date | string, formatStr = "dd-MM-yyyy hh:mm"):string{
        return format(date, formatStr)
    }
}

