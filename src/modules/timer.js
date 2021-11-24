/*jshint esversion: 6 */
`use strict`;

class Timer {

  constructor({ deadline, timerDaysQuerySelector, timerHoursQuerySelector, timerMinutesQuerySelector, timerSecondsQuerySelector }) {
    this.timerDays = document.querySelectorAll(timerDaysQuerySelector);
    this.timerHours = document.querySelectorAll(timerHoursQuerySelector);
    this.timerMinutes = document.querySelectorAll(timerMinutesQuerySelector);
    this.timerSeconds = document.querySelectorAll(timerSecondsQuerySelector);

    this.deadline = deadline;
    this.idInterval = setInterval(() => this.updateTimer(), 1000);
  }

  getTimeRemaining() {
    const dateStop = new Date(this.deadline).getTime();
    const dateNow = new Date().getTime();

    const timeRemaining = (dateStop - dateNow) / 1000;
    const daysTillDeadline = Math.floor(timeRemaining / 60 / 60 / 24);

    return {
      timeRemaining: timeRemaining,
      daysTillDeadline: daysTillDeadline,
      hoursTillDeadline: Math.floor(timeRemaining / 60 / 60 - daysTillDeadline * 24),
      minutesTillDeadline: Math.floor((timeRemaining / 60) % 60),
      secondsTillDeadline: Math.floor((timeRemaining) % 60),
    };
  }

  updateTimer() {
    let { timeRemaining, daysTillDeadline, hoursTillDeadline, minutesTillDeadline, secondsTillDeadline } = this.getTimeRemaining();

    this.timerDays.forEach(timerItem => {
      timerItem.textContent = this.addZeroBeforeNumber(daysTillDeadline);
    });

    this.timerHours.forEach(timerItem => {
      timerItem.textContent = this.addZeroBeforeNumber(hoursTillDeadline);
    });

    this.timerMinutes.forEach(timerItem => {
      timerItem.textContent = this.addZeroBeforeNumber(minutesTillDeadline);
    });

    this.timerSeconds.forEach(timerItem => {
      timerItem.textContent = this.addZeroBeforeNumber(secondsTillDeadline);
    });

    if (timeRemaining <= 0) {
      clearInterval(this.idInterval);

      this.timerDays.forEach(timerItem => {
        timerItem.textContent = '00';
      });

      this.timerHours.forEach(timerItem => {
        timerItem.textContent = '00';
      });

      this.timerMinutes.forEach(timerItem => {
        timerItem.textContent = '00';
      });

      this.timerSeconds.forEach(timerItem => {
        timerItem.textContent = '00';
      });
    }
  }

  addZeroBeforeNumber(timeItem) {
    return String(timeItem).length > 1 ? timeItem : ('00' + timeItem).slice(-2);
  }
}


export default Timer;