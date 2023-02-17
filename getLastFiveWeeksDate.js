function getDateFiveDays() {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;
    const weekFirstDay = new Date(new Date(today.setDate(first)).setHours(0, 0, 0, 0))
    const weekLastDay = new Date(new Date().setHours(23, 59, 59, 999))
    const weekFirstDay2 = new Date(new Date(today.setDate(first)).setHours(0, 0, 0, 0))
    let weeklyData = [];
    weeklyData.push({
        firstWeek: weekFirstDay2,
        lastWeek: weekLastDay
    })
    for (let i = 0; i < 4; i++) {
        let pastWeekFirstday = (weekFirstDay.getDate() - 7);
        let pastWeekLastday = new Date(new Date(weekFirstDay).setHours(23, 59, 59, 999))
        pastWeekFirstday = new Date(new Date(weekFirstDay.setDate(pastWeekFirstday)).setHours(0, 0, 0, 0))
        weeklyData.push({
            firstWeek: pastWeekFirstday,
            lastWeek: pastWeekLastday
        })
    }
   return weeklyData;
};
console.log(getDateFiveDays())