/*jshint esversion: 6 */
`use strict`;

class Timer {

  constructor({ deadline, timerDaysQuerySelector, timerHoursQuerySelector, timerMinutesQuerySelector, timerSecondsQuerySelector }) {
    this.timerDaysQuerySelector = document.querySelector(timerDaysQuerySelector);
    this.timerHoursQuerySelector = document.querySelector(timerHoursQuerySelector);
    this.timerMinutesQuerySelector = document.querySelector(timerMinutesQuerySelector);
    this.timerSecondsQuerySelector = document.querySelector(timerSecondsQuerySelector);

    this.deadline = deadline;
    this.idInterval = setInterval(() => this.updateTimer(), 1000);
  }

  getTimeRemaining() {
    this.dateStop = new Date(this.deadline).getTime();
    this.dateNow = new Date().getTime();

    const timeRemaining = (this.dateStop - this.dateNow) / 1000;
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

    this.timerDaysQuerySelector.textContent = this.addZeroBeforeNumber(daysTillDeadline);
    this.timerHoursQuerySelector.textContent = this.addZeroBeforeNumber(hoursTillDeadline);
    this.timerMinutesQuerySelector.textContent = this.addZeroBeforeNumber(minutesTillDeadline);
    this.timerSecondsQuerySelector.textContent = this.addZeroBeforeNumber(secondsTillDeadline);

    if (timeRemaining <= 0) {
      clearInterval(this.idInterval);

      this.timerDaysQuerySelector.textContent = '00';
      this.timerHoursQuerySelector.textContent = '00';
      this.timerMinutesQuerySelector.textContent = '00';
      this.timerSecondsQuerySelector.textContent = '00';
    }
  }

  addZeroBeforeNumber(timeItem) {
    return String(timeItem).length > 1 ? timeItem : ('00' + timeItem).slice(-2);
  }
}


export default Timer;