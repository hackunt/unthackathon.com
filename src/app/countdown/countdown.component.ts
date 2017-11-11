import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})

export class CountdownComponent implements OnInit {
  // Number parts variables
  parts;
  // The canvas contexts we will use to draw on
  secondscanvas;
  minutescanvas;
  hourscanvas;
  dayscanvas;
  // The elem and style for the timercanvas
  elem;
  timercanvasstyle;
  // The Coordinates and width of the numbers
  timerh;
  w;
  h;
  x;
  x2;
  // The y values for the animations
  y1;
  y2;
  y3;
  // The current date
  timetillcount;
  // The interval that counts the timer
  timerthread;


  constructor() { }

  ngOnInit() {

    // Number parts variables
    this.parts = this.getPartsArray();
  
    // The canvas context we will use to draw on
    let seccanv = <HTMLCanvasElement>document.getElementById('secondscanvas');  
    this.secondscanvas = seccanv.getContext('2d');
  
    let mincanv = <HTMLCanvasElement>document.getElementById('minutescanvas');  
    this.minutescanvas = mincanv.getContext('2d');
    
    let hourcanv = <HTMLCanvasElement>document.getElementById('hourscanvas');  
    this.hourscanvas = hourcanv.getContext('2d');
    
    let dayscanv = <HTMLCanvasElement>document.getElementById('dayscanvas');    
    this.dayscanvas = dayscanv.getContext('2d');
  
    // The elem and style for the timercanvas
    this.elem = document.querySelector('.timercanvas');
    this.timercanvasstyle = getComputedStyle(this.elem);
  
    // The Coordinates and width of the numbers
    this.timerh = parseInt(this.timercanvasstyle.height, 10) - 45;
    this.w = ((this.timerh / 3)) / 2;
    this.h = (this.timerh / 3);
    this.x = (3 * (parseInt(this.timercanvasstyle.width, 10) / 4)) - (this.w / 2);
    this.x2 = (parseInt(this.timercanvasstyle.width, 10) / 4) - (this.w / 2);
  

    // The y values for the animations
    this.y1 = 0;
    this.y2 = parseInt(this.timercanvasstyle.height, 10) / 3
    this.y3 = this.y2 * 2;
  
    // The current date
    this.timetillcount = [0,0,0,0];
  
    // The interval that counts the timer
    this.timerthread;
  
    this.countdownTill(2018,2,9,0,0,0);
  }

  countdownTill(yyyy, mm, dd, hh, mn, ss)
  {
    console.log('run');
      let timetill = new Date(yyyy, (mm - 1), dd, hh, mn, ss);
      let curdate = new Date();
  
      // get total seconds between the times
      let delta = Math.abs(timetill.getTime() - curdate.getTime()) / 1000;
  
      // calculate (and subtract) whole days
      let days = Math.floor(delta / 86400);
      this.timetillcount[0] = days;
      delta -= days * 86400;
  
  
      // calculate (and subtract) whole hours
      let hours = Math.floor(delta / 3600) % 24;
      this.timetillcount[1] = hours;
      delta -= hours * 3600;
  
      // calculate (and subtract) whole minutes
      let minutes = Math.floor(delta / 60) % 60;
      this.timetillcount[2] = minutes;
      delta -= minutes * 60;
  
      // what's left is seconds
      let seconds = Math.floor(delta % 60);  // in theory the modulus is not required
      this.timetillcount[3] = seconds;
  
      this.initDraw();
    
      this.timerthread = setInterval(this.updateCountdown, 1000);
  }


  updateCountdown()
  {
      this.updateTimeTill;
  }


  updateTimeTill()
  {
    if(!((this.timetillcount[3] == 0) && (this.timetillcount[2] == 0) && (this.timetillcount[1] == 0) && (this.timetillcount[0] == 0)))
    {

        if(this.timetillcount[3] == 0)
        {
            this.evaluateDraw(this.timetillcount[3], 59, this.secondscanvas);
            this.timetillcount[3] = 59;

            if(this.timetillcount[2] == 0)
            {
                this.evaluateDraw((this.timetillcount[2]), 59, this.minutescanvas);
                this.timetillcount[2] = 59;

                if(this.timetillcount[1] == 0)
                {
                    this.evaluateDraw(this.timetillcount[1], 23, this.hourscanvas);
                    this.timetillcount[1] = 23;

                    if(this.timetillcount[0] != 0)
                    {
                        this.evaluateDraw(this.timetillcount[0], 99, this.dayscanvas);
                        this.timetillcount[0]--;
                    }
                }else
                {
                  this.evaluateDraw(this.timetillcount[3], 59, this.hourscanvas);
                  this.timetillcount[1]--;
                }

            }else
            {
              this.evaluateDraw((this.timetillcount[2]), 59, this.minutescanvas);
              this.timetillcount[2]--;
            }

        }else
        {
            this.evaluateDraw(this.timetillcount[3], 59, this.secondscanvas);
            this.timetillcount[3]--;
        }
    }else
    {
            clearInterval(this.timerthread);
    }
  }


  evaluateDraw(num, wrapstart, canvas)
  {
      let h = parseInt(this.timercanvasstyle.height, 10) / 3
      if((num < wrapstart) && (num > 1))
      {
          window.requestAnimationFrame(
              function()
              {
                this.animate(num - 2, num - 1, num, num + 1, canvas, -h, h)
              });
      }else if(num == wrapstart)
      {
          window.requestAnimationFrame(
              function()
              {
                this.animate(num - 2, num - 1, num, 0, canvas, -h, h)
              });
      }else if(num == 1)
      {
          window.requestAnimationFrame(
              function()
              {
                this.animate(wrapstart, 0, 1, 2, canvas, -h, h)
              });
      }else if(num == 0)
      {
          window.requestAnimationFrame(
              function()
              {
                this.animate(wrapstart - 1, wrapstart, 0, 1, canvas, -h, h)
              });
      }
  }


  getPartsArray()
  {
      let parts = [
                    new Image(),
                    new Image(),
                    new Image(),
                    new Image(),
                    new Image(),
                    new Image(),     
                    new Image(),
                  ];
  
      // The sources
      parts[0].src = '../../assets/countdownimages/pg0.png';
      parts[1].src = '../../assets/countdownimages/pg1.png';
      parts[2].src = '../../assets/countdownimages/pg2.png';
      parts[3].src = '../../assets/countdownimages/pg3.png';
      parts[4].src = '../../assets/countdownimages/pg4.png';
      parts[5].src = '../../assets/countdownimages/pg5.png';
      parts[6].src = '../../assets/countdownimages/pg6.png';
  
      return parts;
  }


  getPartsFromInt(x)
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

  
  partsForNextInt(cur, next)
  {
      let curparts = this.getPartsFromInt(cur);
      let nextparts = this.getPartsFromInt(next);
      let partsneeded = [];
  
      for(let i = 0; i < nextparts.length; i++)
      {
          if(!this.includes(curparts,nextparts[i]))
          {
              partsneeded.push(nextparts[i]);
          }
      }
  
      return partsneeded;
  }


  partsToBeDropped(cur, next)
  {
      let curparts = this.getPartsFromInt(cur);
      let nextparts = this.getPartsFromInt(next);
      let partsdropped = [];
  
      for(let i = 0; i < curparts.length; i++)
      {
          if(!this.includes(nextparts, curparts[i]))
          {
              partsdropped.push(curparts[i]);
          }
      }
  
      return partsdropped;
  }


  partsToStay(cur, next)
  {
          let drop = this.partsToBeDropped(cur, next);
          let curparts = this.getPartsFromInt(cur);
          let partsstay = [];
          for(let i = 0; i < curparts.length; i++)
          {
              if(!this.includes(drop, curparts[i]))
              {
                  partsstay.push(curparts[i]);
              }
          }
  
          return partsstay;
  }

  animate(p1, p2, pc, pp, canvas, y, dy)
  {
    // ex. 12; d1 = 1, d0 = 2
    let d1p1 = this.getPlace(p1, 1);
    let d1p2 = this.getPlace(p2, 1);
    let d1pc = this.getPlace(pc, 1);
    let d1pp = this.getPlace(pp, 1);

    let d0p1 = this.getPlace(p1, 0);
    let d0p2 = this.getPlace(p2, 0);
    let d0pc = this.getPlace(pc, 0);
    let d0pp = this.getPlace(pp, 0);

    // Parts for the first digits
    let partstotop0 = this.partsForNextInt(d0p2, d0p1);
    let partsfornext0 = this.partsForNextInt(d0pc, d0p2);
    let partstostay0 = this.partsToStay(d0pc, d0p2);
    let partstodrop0 = this.partsToBeDropped(d0pc, d0p2);
    let partstofall0 = this.partsToBeDropped(d0pp, d0pc);

    // Parts for the second digits
    let partstotop1 = this.partsForNextInt(d1p2, d1p1);
    let partsfornext1 = this.partsForNextInt(d1pc, d1p2);
    let partstostay1 = this.partsToStay(d1pc, d1p2);
    let partstodrop1 = this.partsToBeDropped(d1pc, d1p2);
    let partstofall1 = this.partsToBeDropped(d1pp, d1pc);

    switch(canvas)
    {
        case this.secondscanvas:
            this.secondscanvas.clearRect(0, 0, parseInt(this.timercanvasstyle.width, 10), parseInt(this.timercanvasstyle.height, 10));

            // Drawing moving parts for second digit
            this.drawParts(canvas, partstotop1, this.x2, y);
            this.drawParts(canvas, partsfornext1, this.x2, (y + dy));
            this.drawParts(canvas, partstodrop1, this.x2, (y + (2 * dy)));
            this.drawParts(canvas, partstofall1, this.x2, (y + (3 *dy)));

            // Drawing moving parts for the first digit
            this.drawParts(canvas, partstotop0, this.x, y);
            this.drawParts(canvas, partsfornext0, this.x, (y + dy));
            this.drawParts(canvas, partstodrop0, this.x, (y + (2 * dy)));
            this.drawParts(canvas, partstofall0, this.x, (y + (3 * dy)));

            // Drawing parts that will stay constant
            this.drawParts(canvas, partstostay1, this.x2, parseInt(this.timercanvasstyle.height, 10) / 3);
            this.drawParts(canvas, partstostay0, this.x, parseInt(this.timercanvasstyle.height, 10) / 3);

            break;
        case this.minutescanvas:
            this.minutescanvas.clearRect(0, 0, parseInt(this.timercanvasstyle.width, 10), parseInt(this.timercanvasstyle.height, 10));

            // Drawing moving parts for second digit
            this.drawParts(canvas, partstotop1, this.x2, y);
            this.drawParts(canvas, partsfornext1, this.x2, (y + dy));
            this.drawParts(canvas, partstodrop1, this.x2, (y + (2 * dy)));
            this.drawParts(canvas, partstofall1, this.x2, (y + (3 * dy)));

            // Drawing moving parts for the first digit
            this.drawParts(canvas, partstotop0, this.x, y);
            this.drawParts(canvas, partsfornext0, this.x, (y + dy));
            this.drawParts(canvas, partstodrop0, this.x, (y + (2 * dy)));
            this.drawParts(canvas, partstofall0, this.x, (y + (3 * dy)));

            // Drawing parts that will stay constant
            this.drawParts(canvas, partstostay1, this.x2,  parseInt(this.timercanvasstyle.height, 10) / 3);
            this.drawParts(canvas, partstostay0, this.x,  parseInt(this.timercanvasstyle.height, 10) / 3);

            break;
        case this.hourscanvas:
            this.hourscanvas.clearRect(0, 0, parseInt(this.timercanvasstyle.width, 10), parseInt(this.timercanvasstyle.height, 10));

            // Drawing moving parts for second digit
            this.drawParts(canvas, partstotop1, this.x2, y);
            this.drawParts(canvas, partsfornext1, this.x2, (y + dy));
            this.drawParts(canvas, partstodrop1, this.x2, (y + (2 * dy)));
            this.drawParts(canvas, partstofall1, this.x2, (y + (3 * dy)));

            // Drawing moving parts for the first digit
            this.drawParts(canvas, partstotop0, this.x, y);
            this.drawParts(canvas, partsfornext0, this.x, (y + dy));
            this.drawParts(canvas, partstodrop0, this.x, (y + (2 * dy)));
            this.drawParts(canvas, partstofall0, this.x, (y + (3 * dy)));

            // Drawing parts that will stay constant
            this.drawParts(canvas, partstostay1, this.x2, parseInt(this.timercanvasstyle.height, 10) / 3);
            this.drawParts(canvas, partstostay0, this.x, parseInt(this.timercanvasstyle.height, 10) / 3);

            break;
        case this.dayscanvas:
            this.dayscanvas.clearRect(0, 0, parseInt(this.timercanvasstyle.width, 10), parseInt(this.timercanvasstyle.height, 10));

            // Drawing moving parts for second digit
            this.drawParts(canvas, partstotop1, this.x2, y);
            this.drawParts(canvas, partsfornext1, this.x2, (y + dy));
            this.drawParts(canvas, partstodrop1, this.x2, (y + (2 * dy)));
            this.drawParts(canvas, partstofall1, this.x2, (y + (3 * dy)));

            // Drawing moving parts for the first digit
            this.drawParts(canvas, partstotop0, this.x, y);
            this.drawParts(canvas, partsfornext0, this.x, (y + dy));
            this.drawParts(canvas, partstodrop0, this.x, (y + (2 * dy)));
            this.drawParts(canvas, partstofall0, this.x, (y + (3 * dy)));

            // Drawing parts that will stay constant
            this.drawParts(canvas, partstostay1, this.x2, parseInt(this.timercanvasstyle.height, 10) / 3);
            this.drawParts(canvas, partstostay0, this.x,  parseInt(this.timercanvasstyle.height, 10) / 3);

            break;
    }

    if(y < 0)
    {
        window.requestAnimationFrame(
            function()
            {
                this.animate(p1, p2, pc, pp, canvas, (y + 5), dy)
            });
    }
  }

  getPlace(val, place)
  {
      let x = (Math.floor(val / Math.pow(10, place)) / 10);
      x = (x - Math.floor(x)) * 10;
      return Math.round(x);
  }
  
  drawParts(canvas, p, x, y)
  {
    console.log(canvas);
      switch(canvas)
      {
          case this.secondscanvas:
              for(let i = 0; i < this.parts.length; i++)
              {
                  if(this.includes(p, i))
                  {
                    console.log("t:"+this.parts[i]);     
                    console.log(i);                                     
                    this.parts[i].onload = () =>
                    {
                      canvas.drawImage(this.parts[i], x, y, this.w, this.h);      
                    };
                  }
              }
              break;
          case this.minutescanvas:
              for(let i = 0; i < this.parts.length; i++)
              {
                  if(this.includes(p, i))
                  {
                    console.log(i);                                                         
                    this.parts[i].onload = () =>
                    {
                      canvas.drawImage(this.parts[i], x, y, this.w, this.h);      
                    };
                  }
              }
              break;
          case this.hourscanvas:
              for(let i = 0; i < this.parts.length; i++)
              {
                  if(this.includes(p, i))
                  {
                    console.log(i);                                                         
                    this.parts[i].onload = () =>
                    {
                      canvas.drawImage(this.parts[i], x, y, this.w, this.h);      
                    };
                  }
              }
              break;
          case this.dayscanvas:
              for(let i = 0; i < this.parts.length; i++)
              {
                  if(this.includes(p, i))
                  {
                    console.log(i);                                                         
                    this.parts[i].onload = () =>
                    {
                      canvas.drawImage(this.parts[i], x, y, this.w, this.h);      
                    };
                  }
              }
              break;
      }
  }


  initDraw()
  {
    console.log('initdraw');
    let y = parseInt(this.timercanvasstyle.height, 10) / 3;
    console.log("x:"+this.x+"x2:"+this.x2);
    

    // Drawing the seconds
    this.drawParts(this.secondscanvas, this.getPartsFromInt(this.getPlace(this.timetillcount[3], 1)), this.x2, y);
    this.drawParts(this.secondscanvas, this.getPartsFromInt(this.getPlace(this.timetillcount[3], 0)), this.x, y);

    // Drawing the minutes
    this.drawParts(this.minutescanvas, this.getPartsFromInt(this.getPlace(this.timetillcount[2], 1)), this.x2, y);
    this.drawParts(this.minutescanvas, this.getPartsFromInt(this.getPlace(this.timetillcount[2], 0)), this.x, y);

    // Drawing the hours
    this.drawParts(this.hourscanvas, this.getPartsFromInt(this.getPlace(this.timetillcount[1], 1)), this.x2, y);
    this.drawParts(this.hourscanvas, this.getPartsFromInt(this.getPlace(this.timetillcount[1], 0)), this.x, y);

    // Drawing the days
    this.drawParts(this.dayscanvas, this.getPartsFromInt(this.getPlace(this.timetillcount[0], 1)), this.x2, y);
    this.drawParts(this.dayscanvas, this.getPartsFromInt(this.getPlace(this.timetillcount[0], 0)), this.x, y);
    console.log('doneinitdraw');
  }


  includes(array, val)
  {
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] == val) return true;
    }

    return false;
  }
}