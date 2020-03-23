export class CustomFunctions{

    generateDate(dateType) {
        let date = new Date();
        if (dateType === 'startDate'){
            return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        }
        else {
            if (dateType === 'endDate'){
                return `${date.getDate() +1}/${date.getMonth()+1}/${date.getFullYear()}`;
            }
        }
    }
}