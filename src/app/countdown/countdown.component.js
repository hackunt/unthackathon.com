// Number parts variables
var parts = getPartsArray();

// The canvas context we will use to draw on
var secondscanvas = document.getElementById('secondscanvas').getContext('2d');
var minutescanvas = document.getElementById('minutescanvas').getContext('2d');
var hourscanvas = document.getElementById('hourscanvas').getContext('2d');
var dayscanvas = document.getElementById('dayscanvas').getContext('2d');

// The elem and style for the timercanvas
var elem = document.querySelector('.timercanvas');
var timercanvasstyle = getComputedStyle(elem);

// The Coordinates and width of the numbers
var timerh = parseInt(timercanvasstyle.height, 10) - 45;
var w = ((timerh / 3)) / 2;
var h = (timerh / 3);
var x = (3 * (parseInt(timercanvasstyle.width, 10) / 4)) - (w / 2);
var x2 = (parseInt(timercanvasstyle.width, 10) / 4) - (w / 2);

// The y values for the animations
var y1 = 0;
var y2 = parseInt(timercanvasstyle.height, 10) / 3
var y3 = y2 * 2;

// The current date
var timetillcount = [0,0,0,0];

// The interval that counts the timer
var timerthread;


function countdownTill(yyyy, mm, dd, hh, mn, ss)
{
    var timetill = new Date(yyyy, (mm - 1), dd, hh, mn, ss);
    var curdate = new Date();

    // get total seconds between the times
    var delta = Math.abs(timetill.getTime() - curdate.getTime()) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    timetillcount[0] = days;
    delta -= days * 86400;


    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    timetillcount[1] = hours;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    timetillcount[2] = minutes;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = Math.floor(delta % 60);  // in theory the modulus is not required
    timetillcount[3] = seconds;

    initDraw();

    //document.getElementById("secondscanvas").addEventListener("click", updateCountdown);

    timerthread = setInterval(updateCountdown, 1000);
}


function updateCountdown()
{
        console.log("Called")
        updateTimeTill()
}


function updateTimeTill()
{
    if(!((timetillcount[3] == 0) && (timetillcount[2] == 0) && (timetillcount[1] == 0) && (timetillcount[0] == 0)))
    {

        if(timetillcount[3] == 0)
        {
            evaluateDraw(timetillcount[3], 59, secondscanvas);
            timetillcount[3] = 59;

            if(timetillcount[2] == 0)
            {
                evaluateDraw((timetillcount[2]), 59, minutescanvas);
                timetillcount[2] = 59;

                if(timetillcount[1] == 0)
                {
                    evaluateDraw(timetillcount[1], 23, hourscanvas);
                    timetillcount[1] = 23;

                    if(timetillcount[0] != 0)
                    {
                        evaluateDraw(timetillcount[0], 99, dayscanvas);
                        timetillcount[0]--;
                    }
                }else
                {
                    evaluateDraw(timetillcount[3], 59, hourscanvas);
                    timetillcount[1]--;
                }

            }else
            {
                evaluateDraw((timetillcount[2]), 59, minutescanvas);
                timetillcount[2]--;
            }

        }else
        {
            evaluateDraw(timetillcount[3], 59, secondscanvas);
            timetillcount[3]--;
        }
    }else
    {
            clearInterval(timerthread);
    }
}


function evaluateDraw(num, wrapstart, canvas)
{
    var h = parseInt(timercanvasstyle.height, 10) / 3
    if((num < wrapstart) && (num > 1))
    {
        window.requestAnimationFrame(
            function()
            {
                animate(num - 2, num - 1, num, num + 1, canvas, -h, h)
            });
    }else if(num == wrapstart)
    {
        window.requestAnimationFrame(
            function()
            {
                animate(num - 2, num - 1, num, 0, canvas, -h, h)
            });
    }else if(num == 1)
    {
        window.requestAnimationFrame(
            function()
            {
                animate(wrapstart, 0, 1, 2, canvas, -h, h)
            });
    }else if(num == 0)
    {
        window.requestAnimationFrame(
            function()
            {
                animate(wrapstart - 1, wrapstart, 0, 1, canvas, -h, h)
            });
    }
}


function getPartsArray()
{
    var parts = [
                    document.createElement('img'),
                    document.createElement('img'),
                    document.createElement('img'),
                    document.createElement('img'),
                    document.createElement('img'),
                    document.createElement('img'),
                    document.createElement('img')
                ];

    // The sources
    parts[0].src = '../Images/pg0.png';
    parts[1].src = '../Images/pg1.png';
    parts[2].src = '../Images/pg2.png';
    parts[3].src = '../Images/pg3.png';
    parts[4].src = '../Images/pg4.png';
    parts[5].src = '../Images/pg5.png';
    parts[6].src = '../Images/pg6.png';

    return parts;
}


function getPartsFromInt(x)
{
    switch(x)
    {
        case 0:
            return [0,1,2,6,5,4];
        case 1:
            return [2,6];
        case 2:
            return [1,2,3,4,5];
        case 3:
            return [1,2,3,6,5];
        case 4:
            return [0,3,2,6];
        case 5:
            return [1,0,3,6,5];
        case 6:
            return [1,0,3,4,5,6];
        case 7:
            return [1,2,6];
        case 8:
            return [0,1,2,3,4,5,6];
        case 9:
            return [0,1,2,3,5,6];
        default:
            return [0,1,2,6,5,4];
    }
}


function partsForNextInt(cur, next)
{
    var curparts = getPartsFromInt(cur);
    var nextparts = getPartsFromInt(next);
    var partsneeded = [];

    for(var i = 0; i < nextparts.length; i++)
    {
        if(!includes(curparts,nextparts[i]))
        {
            partsneeded.push(nextparts[i]);
        }
    }

    return partsneeded;
}


function partsToBeDropped(cur, next)
{
    var curparts = getPartsFromInt(cur);
    var nextparts = getPartsFromInt(next);
    var partsdropped = [];

    for(var i = 0; i < curparts.length; i++)
    {
        if(!includes(nextparts, curparts[i]))
        {
            partsdropped.push(curparts[i]);
        }
    }

    return partsdropped;
}


function partsToStay(cur, next)
{
        var drop = partsToBeDropped(cur, next);
        var curparts = getPartsFromInt(cur);
        var partsstay = [];
        for(var i = 0; i < curparts.length; i++)
        {
            if(!includes(drop, curparts[i]))
            {
                partsstay.push(curparts[i]);
            }
        }

        return partsstay;
}


function animate(p1, p2, pc, pp, canvas, y, dy)
{

    // ex. 12; d1 = 1, d0 = 2
    var d1p1 = getPlace(p1, 1);
    var d1p2 = getPlace(p2, 1);
    var d1pc = getPlace(pc, 1);
    var d1pp = getPlace(pp, 1);

    var d0p1 = getPlace(p1, 0);
    var d0p2 = getPlace(p2, 0);
    var d0pc = getPlace(pc, 0);
    var d0pp = getPlace(pp, 0);

    // Parts for the first digits
    var partstotop0 = partsForNextInt(d0p2, d0p1);
    var partsfornext0 = partsForNextInt(d0pc, d0p2);
    var partstostay0 = partsToStay(d0pc, d0p2);
    var partstodrop0 = partsToBeDropped(d0pc, d0p2);
    var partstofall0 = partsToBeDropped(d0pp, d0pc);

    // Parts for the second digits
    var partstotop1 = partsForNextInt(d1p2, d1p1);
    var partsfornext1 = partsForNextInt(d1pc, d1p2);
    var partstostay1 = partsToStay(d1pc, d1p2);
    var partstodrop1 = partsToBeDropped(d1pc, d1p2);
    var partstofall1 = partsToBeDropped(d1pp, d1pc);

    switch(canvas)
    {
        case secondscanvas:
            secondscanvas.clearRect(0, 0, parseInt(timercanvasstyle.width, 10), parseInt(timercanvasstyle.height, 10));

            // Drawing moving parts for second digit
            drawParts(canvas, partstotop1, x2, y);
            drawParts(canvas, partsfornext1, x2, (y + dy));
            drawParts(canvas, partstodrop1, x2, (y + (2 * dy)));
            drawParts(canvas, partstofall1, x2, (y + (3 *dy)));

            // Drawing moving parts for the first digit
            drawParts(canvas, partstotop0, x, y);
            drawParts(canvas, partsfornext0, x, (y + dy));
            drawParts(canvas, partstodrop0, x, (y + (2 * dy)));
            drawParts(canvas, partstofall0, x, (y + (3 * dy)));

            // Drawing parts that will stay constant
            drawParts(canvas, partstostay1, x2, parseInt(timercanvasstyle.height, 10) / 3);
            drawParts(canvas, partstostay0, x, parseInt(timercanvasstyle.height, 10) / 3);

            break;
        case minutescanvas:
            minutescanvas.clearRect(0, 0, parseInt(timercanvasstyle.width, 10), parseInt(timercanvasstyle.height, 10));

            // Drawing moving parts for second digit
            drawParts(canvas, partstotop1, x2, y);
            drawParts(canvas, partsfornext1, x2, (y + dy));
            drawParts(canvas, partstodrop1, x2, (y + (2 * dy)));
            drawParts(canvas, partstofall1, x2, (y + (3 * dy)));

            // Drawing moving parts for the first digit
            drawParts(canvas, partstotop0, x, y);
            drawParts(canvas, partsfornext0, x, (y + dy));
            drawParts(canvas, partstodrop0, x, (y + (2 * dy)));
            drawParts(canvas, partstofall0, x, (y + (3 * dy)));

            // Drawing parts that will stay constant
            drawParts(canvas, partstostay1, x2,  parseInt(timercanvasstyle.height, 10) / 3);
            drawParts(canvas, partstostay0, x,  parseInt(timercanvasstyle.height, 10) / 3);

            break;
        case hourscanvas:
            hourscanvas.clearRect(0, 0, parseInt(timercanvasstyle.width, 10), parseInt(timercanvasstyle.height, 10));

            // Drawing moving parts for second digit
            drawParts(canvas, partstotop1, x2, y);
            drawParts(canvas, partsfornext1, x2, (y + dy));
            drawParts(canvas, partstodrop1, x2, (y + (2 * dy)));
            drawParts(canvas, partstofall1, x2, (y + (3 * dy)));

            // Drawing moving parts for the first digit
            drawParts(canvas, partstotop0, x, y);
            drawParts(canvas, partsfornext0, x, (y + dy));
            drawParts(canvas, partstodrop0, x, (y + (2 * dy)));
            drawParts(canvas, partstofall0, x, (y + (3 * dy)));

            // Drawing parts that will stay constant
            drawParts(canvas, partstostay1, x2, parseInt(timercanvasstyle.height, 10) / 3);
            drawParts(canvas, partstostay0, x, parseInt(timercanvasstyle.height, 10) / 3);

            break;
        case dayscanvas:
            dayscanvas.clearRect(0, 0, parseInt(timercanvasstyle.width, 10), parseInt(timercanvasstyle.height, 10));

            // Drawing moving parts for second digit
            drawParts(canvas, partstotop1, x2, y);
            drawParts(canvas, partsfornext1, x2, (y + dy));
            drawParts(canvas, partstodrop1, x2, (y + (2 * dy)));
            drawParts(canvas, partstofall1, x2, (y + (3 * dy)));

            // Drawing moving parts for the first digit
            drawParts(canvas, partstotop0, x, y);
            drawParts(canvas, partsfornext0, x, (y + dy));
            drawParts(canvas, partstodrop0, x, (y + (2 * dy)));
            drawParts(canvas, partstofall0, x, (y + (3 * dy)));

            // Drawing parts that will stay constant
            drawParts(canvas, partstostay1, x2, parseInt(timercanvasstyle.height, 10) / 3);
            drawParts(canvas, partstostay0, x,  parseInt(timercanvasstyle.height, 10) / 3);

            break;
    }

    if(y < 0)
    {
        window.requestAnimationFrame(
            function()
            {
                animate(p1, p2, pc, pp, canvas, (y + 5), dy)
            });
    }

}


function getPlace(val, place)
{
    var x = (Math.floor(val / Math.pow(10, place)) / 10);
    x = (x - Math.floor(x)) * 10;
    return Math.round(x);
}


function drawParts(canvas, p, x, y)
{
    switch(canvas)
    {
        case secondscanvas:
            for(var i = 0; i < parts.length; i++)
            {
                if(includes(p, i))
                {
                    secondscanvas.drawImage(parts[i], x, y, w, h);
                }
            }
            break;
        case minutescanvas:
            for(var i = 0; i < parts.length; i++)
            {
                if(includes(p, i))
                {
                    minutescanvas.drawImage(parts[i], x, y, w, h);
                }
            }
            break;
        case hourscanvas:
            for(var i = 0; i < parts.length; i++)
            {
                if(includes(p, i))
                {
                    hourscanvas.drawImage(parts[i], x, y, w, h);
                }
            }
            break;
        case dayscanvas:
            for(var i = 0; i < parts.length; i++)
            {
                if(includes(p, i))
                {
                    dayscanvas.drawImage(parts[i], x, y, w, h);
                }
            }
            break;
    }
}


function initDraw()
{
    var y = parseInt(timercanvasstyle.height, 10) / 3;

    // Drawing the seconds
    drawParts(secondscanvas, getPartsFromInt(getPlace(timetillcount[3], 1)), x2, y);
    drawParts(secondscanvas, getPartsFromInt(getPlace(timetillcount[3], 0)), x, y);

    // Drawing the minutes
    drawParts(minutescanvas, getPartsFromInt(getPlace(timetillcount[2], 1)), x2, y);
    drawParts(minutescanvas, getPartsFromInt(getPlace(timetillcount[2], 0)), x, y);

    // Drawing the hours
    drawParts(hourscanvas, getPartsFromInt(getPlace(timetillcount[1], 1)), x2, y);
    drawParts(hourscanvas, getPartsFromInt(getPlace(timetillcount[1], 0)), x, y);

    // Drawing the days
    drawParts(dayscanvas, getPartsFromInt(getPlace(timetillcount[0], 1)), x2, y);
    drawParts(dayscanvas, getPartsFromInt(getPlace(timetillcount[0], 0)), x, y);

}


function includes(array, val)
{
        for(var i = 0; i < array.length; i++)
        {
            if(array[i] == val) return true;
        }

    return false;
}