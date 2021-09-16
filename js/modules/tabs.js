function tabs(tabsSelector, tabsParentSelector, tabsContentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsParent = document.querySelector(tabsParentSelector),
          tabContent = document.querySelectorAll(tabsContentSelector);

    
    function hideTabContent() {
        tabContent.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('fade','show');
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i=0) {
        tabContent[i].classList.add('fade','show');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', event => {         
        const target = event.target;                                        //проверка если выбран элемент который имеет свойство target и =>
        if(target && target.classList.contains(tabsSelector.slice(1))) {        //содержит класс tabheader__item потому что пользователь может выбрать пустую строку.
            tabs.forEach((item,i) => {                                      //переборка массива всего меню табов и если оно равно тому элементу который выбран пользователь
                if(target == item) {                                        //то мы сначала все очищаем, а потом добавляем активное нужное окно.
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });
}

export default tabs;