var isnDay = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
today = new Date()
Year=today.getYear()
var isnMonth=parseInt(today.getMonth())+1
if (document.all) document.write(Year+"年"+isnMonth+"月"+today.getDate()+"日 "+isnDay[today.getDay()])