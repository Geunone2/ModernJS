function introduce() {
    const Mokpo = '목포시';
    console.log(Mokpo);

    return function city() {
        const city = '전라남도';
        console.log(city, Mokpo);
    }

}

const IntroduceMokpo = introduce();
IntroduceMokpo();