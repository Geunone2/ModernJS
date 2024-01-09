const xhr = new XMLHttpRequest();


// HTTP ��û �ʱ�ȭ
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// HTTP ��û ����
xhr.send();

// readystatechage �̺�Ʈ�� HTTP ��û ���� ���¸� ��Ÿ���� readystate ������Ƽ�� ����� ������ �߻�

xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.response));
    } else {
        console.error('Error', xhr.status, xhr.statusText);
    }
};