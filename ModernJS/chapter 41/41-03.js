let count = 1;

// 1�� �� Ÿ�̸Ӱ� ����� ������ �ݹ� �Լ� ��ȣ���
// setInterval �Լ��� ������ Ÿ�̸Ӹ� �ĺ��� �� �ִ� ������ Ÿ�̸� id�� ��ȭ
const timeoutId = setInterval(() => {
    console.log(count);

    // count�� 5�̸� setInterval �Լ��� ��ȯ�� Ÿ�̸� id�� clearInterval �Լ� �μ��� �����Ͽ�
    // Ÿ�̸Ӹ� ���, Ÿ�̸Ӱ� ��ҵǸ� setInterval �Լ��� �ݹ� �Լ��� ������� ����
    if (count++ === 5) clearInterval(timeoutId);
}, 1000);