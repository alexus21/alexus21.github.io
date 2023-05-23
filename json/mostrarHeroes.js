const mostrarDatos = (datos) => {
    showNames(datos);
    showAges(datos);
    showSecretIdentity(datos);
    getSuperpowers(datos);
};

const showNames = (datos) => {
    const firstHeroe = document.querySelector("#firstHeroeName");
    const secondHeroe = document.querySelector("#secondHeroeName");
    const thirdHeroe = document.querySelector("#thirdHeroeName");

    firstHeroe.textContent = datos.members[0].name;
    secondHeroe.textContent = datos.members[1].name;
    thirdHeroe.textContent = datos.members[2].name;
};

const showAges = (datos) => {
    const firstAge = document.createElement("li");
    const secondAge = document.createElement("li");
    const thirdAge = document.createElement("li");

    firstAge.textContent = "Edad: " + datos.members[0].age;
    secondAge.textContent = "Edad: " + datos.members[1].age;
    thirdAge.textContent = "Edad: " + datos.members[2].age;

    document.querySelector("#firstHeroDataList").appendChild(firstAge);
    document.querySelector("#secondHeroDataList").appendChild(secondAge);
    document.querySelector("#thirdHeroDataList").appendChild(thirdAge);

};

const showSecretIdentity = (datos) => {
    const firstSA = document.createElement("li");
    const secondSA = document.createElement("li");
    const thirdSA = document.createElement("li");

    firstSA.textContent = "Identidad secreta: " + datos.members[0].secretIdentity;
    secondSA.textContent = "Identidad secreta: " + datos.members[1].secretIdentity;
    thirdSA.textContent = "Identidad secreta: " + datos.members[2].secretIdentity;

    document.querySelector("#firstHeroDataList").appendChild(firstSA);
    document.querySelector("#secondHeroDataList").appendChild(secondSA);
    document.querySelector("#thirdHeroDataList").appendChild(thirdSA);
};

const getSuperpowers = (datos) => {
    const powers1h = datos.members[0].powers;
    const powers2h = datos.members[1].powers;
    const powers3h = datos.members[2].powers;

    const ul1h = document.createElement("ul");
    ul1h.className = "list-group list-group-flush ps-5";

    powers1h.forEach((power) => {
        const li = document.createElement("li");
        li.textContent = power;
        ul1h.appendChild(li);
        document.querySelector("#firstHeroDataList").appendChild(ul1h);
    });

    const ul2h = document.createElement("ul");
    ul2h.className = "list-group list-group-flush ps-5";

    powers2h.forEach((power) => {
        const li = document.createElement("li");
        li.textContent = power;
        ul2h.appendChild(li);
        document.querySelector("#secondHeroDataList").appendChild(ul2h);
    });

    const ul3h = document.createElement("ul");
    ul3h.className = "list-group list-group-flush ps-5";

    powers3h.forEach((power) => {
        const li = document.createElement("li");
        li.textContent = power;
        ul3h.appendChild(li);
        document.querySelector("#thirdHeroDataList").appendChild(ul3h);
    });
};


export default mostrarDatos;
