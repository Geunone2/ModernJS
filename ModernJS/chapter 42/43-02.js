const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis'],
};

// 객체를 JSON 포맷의 문자열로 변환
const json = JSON.stringify(obj);
console.log(typeof json, json);

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

// replacer 함수. 값의 타입이 Number이면 필터링되어 반환되지 않음
function filter(key, value) {
    return typeof value === 'number' ? null : value;
}

// JSON.stringfy 메서드에 두 번째 인수로 replacer 함수를 전달
const strFilterdObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilterdObject, strFilterdObject);