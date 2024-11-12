import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';
export default class Alarmclock extends LightningElement {
    clockImage=AlarmClockAssets+'/AlarmClockAssets/clock.png';
    ringtone=new Audio(AlarmClockAssets+'/AlarmClockAssets/Clocksound.mp3');
    currentTime='';
    hours=[];
    minutes=[];
    meridiems=['AM','PM'];

    hourSelected;
    minSelected;
    meridiemSelected;
    alarmTime; isAlarmSet=false; isAlarmTriggered=false;

    get isFieldNotSelected(){
      return !(this.hourSelected && this.minSelected && this.meridiemSelected);
    }

    get shakeImage(){
      return this.isAlarmTriggered ? 'shake':'';  
    }

    connectedCallback(){
        this.createHouroptions();
        this.createMinuteoptions();
        this.currentTimeHandler();
    }

    currentTimeHandler(){
        setInterval(()=>{
          let dateTime = new Date();
          let hour = dateTime.getHours();//getHours() returns the hour (0 to 23) of a date.
          let min = dateTime.getMinutes();
          let sec = dateTime.getSeconds();
          let ampm = "AM";

          if (hour === 0) {
            hour = 12;
            ampm = "AM";
          } else if (hour === 12) {
            ampm = "PM";
          } else if (hour >= 12) {
            hour = hour - 12;
            ampm = "PM";
          }
          hour = hour<10 ? "0"+hour : hour;
          min = min<10 ? "0"+min : min;
          sec  = sec<10 ? "0"+sec : sec;
      
          this.currentTime = `${hour}:${min}:${sec} ${ampm}`;

          if(this.alarmTime === `${hour}:${min}:${ampm}`){
            this.isAlarmTriggered=true;
            this.ringtone.play();
            this.ringtone.loop=true;
          }
    
        }, 1000)
    }

    createHouroptions(){   //dynamic hour options in the box
        for(let i=1;i<=12;i++){
            let val=i<10  ? "0"+i : i ;
            this.hours.push(val);
        }
    }

    createMinuteoptions(){   //dynamic minutes options in the box
        for(let i=0;i<=59;i++){
            let val=i<10  ? "0"+i : i ;
            this.minutes.push(val);
        }
    }
}   