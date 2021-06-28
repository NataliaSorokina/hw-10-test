// Добавь функционал изменения темы при нажатии (событие change)
// на чекбокс #theme -switch-toggle в тулбаре.
// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс 
// light - theme или dark - theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. 
// Для хранения темы используй localStorage
// Если при загрузке страницы тема тёмная, не забудь поставить
// свойство checked у чекбокса #theme-switch-toggle в true, чтобы
// ползунок сдвинулся в правильное положение.
//  if (Theme = DARK) {
//checkbox.checked === true
// }

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggle = document.querySelector('#theme-switch-toggle');
console.log(toggle);
const bodyRef = document.querySelector('body');
console.log(bodyRef);

toggle.addEventListener('change', switchTheme);




function switchTheme() {
     if (toggle.checked) {
            bodyRef.classList.remove(Theme.LIGHT);
         bodyRef.classList.add(Theme.DARK);
        
        // localStorage.removeItem('theme', Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
     } else {
         bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        // localStorage.removeItem('theme', Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }   
}



if (localStorage.getItem('theme') === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK),    
    toggle.checked = true;
};  

