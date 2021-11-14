/**
 * Copyright (c) 2020 TobyNatooor
 * 
 * returns how much time there is until a specified date
 * @param theDate
 * @example
 * timeUntil('2022-12-28T20:20:20')
 */
 export var timeUntil = function (theDate) {
    var dateInMiliSecs;
    var nowInMiliSecs;
    var timeUntilInMiliSecs;
    var timeLeft;
    var daysTillWeekOne;
    dateInMiliSecs = +new Date(theDate);
    nowInMiliSecs = +new Date();
    timeUntilInMiliSecs = dateInMiliSecs - nowInMiliSecs;
    daysTillWeekOne = +new Date(theDate).getFullYear() - 1960;
    daysTillWeekOne += Math.floor(daysTillWeekOne / 4);
    daysTillWeekOne = (daysTillWeekOne + 5) % 7;
    daysTillWeekOne = 7 - daysTillWeekOne;
    var makeObj = function (floorOrCeil, rmDays) {
        timeLeft = {
            'years': +floorOrCeil((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) / 365),
            'weeks': +floorOrCeil(((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) + rmDays) / 7),
            'days': +floorOrCeil(timeUntilInMiliSecs / 1000 / 60 / 60 / 24),
            'hours': +floorOrCeil(timeUntilInMiliSecs / 1000 / 60 / 60),
            'minutes': +floorOrCeil(timeUntilInMiliSecs / 1000 / 60),
            'seconds': +floorOrCeil(timeUntilInMiliSecs / 1000),
            'miliseconds': +floorOrCeil(timeUntilInMiliSecs),
            'done': false
        };
        timeLeft.miliseconds < 0 ? timeLeft.done = true : timeLeft.done = false;
        return timeLeft;
    };
    if (timeUntilInMiliSecs > 0) {
        return makeObj(Math.floor, -daysTillWeekOne);
    }
    else {
        return makeObj(Math.ceil, daysTillWeekOne);
    }
};
