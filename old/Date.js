var isnDay = new Array("������","����һ","���ڶ�","������","������","������","������")
today = new Date()
Year=today.getYear()
var isnMonth=parseInt(today.getMonth())+1
if (document.all) document.write(Year+"��"+isnMonth+"��"+today.getDate()+"�� "+isnDay[today.getDay()])