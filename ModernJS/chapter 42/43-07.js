// XMLHttpRequest ��ü ����
const xhr = new XMLHttpRequest();

// HTTP ��û �ʱ�ȭ
xhr.open('GET', '/users');

// HTTP ��û ��� ����
// Ŭ���̾�Ʈ�� ������ ������ �������� MIME Ÿ�� ���� : json
xhr.setRequestHeader('content-type', 'application/json');

// HTTP ��û ����
xhr.send();