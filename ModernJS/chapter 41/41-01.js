// 1��(1000ms) �� Ÿ�̸Ӱ� ����Ǹ� �ݹ� �Լ��� ȣ���
setTimeout(() => console.log('hi'), 1000);

// 1��(1000ms) �� Ÿ�̸Ӱ� ����Ǹ� �ݹ� �Լ��� ȣ���
// �̶� �ݹ� �Լ��� 'Lee'�� �μ��� ���޵�
setTimeout(name => console.log(`Hi! ${name}.`), 1000, 'Lee');

// �� ��° �μ��� �����ϸ� �⺻���� 0�� ������
setTimeout(() => console.log('Hello!'));