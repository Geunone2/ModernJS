const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis'],
};

// ��ü�� JSON ������ ���ڿ��� ��ȯ
const json = JSON.stringify(obj);
console.log(typeof json, json);

// ��ü�� JSON ������ ���ڿ��� ��ȯ�ϸ鼭 �鿩����
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

// replacer �Լ�. ���� Ÿ���� Number�̸� ���͸��Ǿ� ��ȯ���� ����
function filter(key, value) {
    return typeof value === 'number' ? null : value;
}

// JSON.stringfy �޼��忡 �� ��° �μ��� replacer �Լ��� ����
const strFilterdObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilterdObject, strFilterdObject);