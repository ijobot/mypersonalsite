const cssSheet = document.getElementById('css')
const userTheme = localStorage.getItem('user_theme') || './eleganttheme.css'

cssSheet.href = userTheme