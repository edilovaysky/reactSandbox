#Создаем главную страницу блога с несколькими постами (публикациями/новостями).

1. Мы создадим 4 файла: App.js в папке ./src, а также файлы Blog.js, Post.js, WelcomeModal.js в папке ./src/app/components.
   В главном файле App.js: подключите компоненты Blog и WelcomeModal, далее создайте массив с постами (объекты с различными свойствами, т.е. title/заголовок поста, postBody/текст поста и т.п. ) для блога и передайте его компоненту Blog (Blog.js). Метод ReactDOM.render() указывается только в App.js.

2. В файле WelcomeModal.js: реализуйте компонент WelcomeModal, который будет выводить перед пользователем приветственное окно после своего монтирования ( т.е. вызвать метод в componentDidMount() ) . При этом показ и скрытие модального окна должно регулироваться за счет изменения состояния this.state = {modal: false}. Добавьте в модальное окно кнопку закрытия (самого модального окна).

3. В файле Blog.js: подключите к данному файлу модульPost.js. Здесь вы должны обработать переданные модулем App.js посты (массив с объектами), трансформируя объекты массива в презентабельный JSX-код (HTML-код с использованием css-стилей). Процесс преобразования (т.е. использование метода map()) проходит в файле Blog.js, а JSX-код («HTML-код») для каждого индивидуального поста генерируется в Post.js (для этого мы его и подключили в Blog.js), которому вы будете передавать свойства преобразуемых объектов в виде props’ов.

4. В файле Post.js: на основе переданных от Blog.js props’ов напишите JSX-код, который будет генерировать новый пост.
