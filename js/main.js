     let 
    buttonStatus = document.querySelector('.interaction-form__button-status'),
    iconStatus = document.querySelector('.interaction-form__icon-status'),
    testStatus = document.querySelector('.button-status__text-state');


    buttonStatus.addEventListener('click',()=>{
        if (testStatus.textContent == 'Запущено') {
            buttonStatus.style.backgroundColor = '#FFE2E5';
            testStatus.textContent = 'Остановлено';
            testStatus.style.color = '#F64E60';
            iconStatus.src = '../img/icons/status-stop.png';
            buttonStatus.style.padding='12px 10px 12px 17px';
        }else{
            buttonStatus.style.backgroundColor = '#C9F7F5';
            testStatus.textContent = 'Запущено';
            testStatus.style.color = '#1BC5BD';
            iconStatus.src = '../img/icons/Path.png';
            buttonStatus.style.padding='12px 20px 12px 27px';
        }
    });

