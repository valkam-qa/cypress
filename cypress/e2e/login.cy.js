describe('Автотест на авторизацию', function () {
    
    it('01 - Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#mail').type('german@dolnikov.ru'); 						// ввёл логин
		cy.get('#loginButton').should('be.disabled'); 						// кнопка некликабельная
		cy.get('#pass').type('iLoveqastudio1'); 							// ввёл пароль
		cy.get('#loginButton').should('be.enabled'); 						// кнопка кликабельная
		cy.get('#loginButton').click(); 									// нажимаю войти

		cy.get('#messageHeader').should('be.visible'); 						// Текст виден пользователь 
		cy.get('#messageHeader').contains('Авторизация прошла успешно'); 	// проверяю

		cy.get('#exitMessageButton > .exitIcon');							//крестик виден
        })


    it('02 - Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');										// ввёл логин

        cy.get('#forgotEmailButton').click();

        cy.get('#forgotForm > .header').should('be.visible');						//текст виден пользователю
        cy.get('#forgotForm > .header').contains('Восстановите пароль');			//проверяю

        cy.get('#mailForgot').type('valedar.kamdil@yandex.ru');						//ввёл адрес почты
        cy.get('#restoreEmailButton').should('be.enabled');							//кнопка кликабельна
        cy.get('#restoreEmailButton').click();										//нажимаю кнопку

        cy.get('#messageHeader').should('be.visible'); 								//текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 	//проверяю

        cy.get('#exitMessageButton > .exitIcon');									//крестик виден
         })


    it('03 - Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#mail').type('german@dolnikov.ru'); 						// ввёл логин
		cy.get('#loginButton').should('be.disabled'); 						// кнопка некликабельная
		cy.get('#pass').type('iLoveqastudio2024'); 							// ввёл неправильный пароль
		cy.get('#loginButton').should('be.enabled'); 						// кнопка кликабельная
		cy.get('#loginButton').click(); 									// нажимаю войти
		
		cy.get('#messageHeader').should('be.visible'); 						// Текст виден пользователь 
		cy.get('#messageHeader').contains('Такого логина или пароля нет'); 	// проверяю

		cy.get('#exitMessageButton > .exitIcon');							//крестик виден
        })


    it('04 - Не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#mail').type('slavon@kuznezoff.ru'); 						// ввёл неправильный логин
		cy.get('#loginButton').should('be.disabled'); 						// кнопка некликабельная
		cy.get('#pass').type('iLoveqastudio1'); 							// ввёл неправильный пароль
		cy.get('#loginButton').should('be.enabled'); 						// кнопка кликабельная
		cy.get('#loginButton').click(); 									// нажимаю войти
		
		cy.get('#messageHeader').should('be.visible'); 						// Текст виден пользователь 
		cy.get('#messageHeader').contains('Такого логина или пароля нет'); 	// проверяю

		cy.get('#exitMessageButton > .exitIcon');							//крестик виден
        })


    it('05 - Проверка валидации', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#mail').type('germandolnikov.ru'); 									// неввалидный логин
		cy.get('#loginButton').should('be.disabled'); 								// кнопка некликабельная
		cy.get('#pass').type('iLoveqastudio1'); 									// ввёл неправильный пароль
		cy.get('#loginButton').should('be.enabled'); 								// кнопка кликабельная
		cy.get('#loginButton').click(); 											// нажимаю войти
		
		cy.get('#messageHeader').should('be.visible'); 								// Текст виден пользователь 
		cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 	// проверяю

		cy.get('#exitMessageButton > .exitIcon');									//крестик виден
        })


    it('06 - Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');

		cy.get('#mail').type('GerMan@Dolnikov.ru'); 						// ввёл логин
		cy.get('#loginButton').should('be.disabled'); 						// кнопка некликабельная
		cy.get('#pass').type('iLoveqastudio1'); 							// ввёл пароль
		cy.get('#loginButton').should('be.enabled'); 						// кнопка кликабельная
		cy.get('#loginButton').click(); 									// нажимаю войти

		cy.get('#messageHeader').should('be.visible'); 						// Текст виден пользователь 
		cy.get('#messageHeader').contains('Авторизация прошла успешно'); 	// проверяю

		cy.get('#exitMessageButton > .exitIcon');							//крестик виден
        })


})












