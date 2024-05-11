const jokesElem = document.getElementById("jokes");

const loader = document.getElementsByClassName("loader")[0]

const jokes = fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=10");

jokesElem.style.visibility = "hidden";

jokes
    .then((result) => result.json())

    .then(({jokes}) => {
        loader.style.display = "none";
        jokesElem.style.visibility ="visible";

        jokes.forEach(element => {
            const jokeWrapper = document.createElement("div");
            const jokeWrapperChild = document.createElement("div");
            const categoryWrapperChild = document.createElement("div");
            const jokeKey = document.createElement("p");
            const jokeValue = document.createElement("p");
            const categoryKey = document.createElement("p")
            const categoryValue = document.createElement("p")

            jokeWrapper.classList.add("joke-wrapper", "flex", "flex-col" ,"gap-2");
            jokeWrapperChild.classList.add("flex", "direction-col");
            categoryWrapperChild.classList.add("flex", "direction-col");
            jokeKey.classList.add("w-10","bold","blue");
            jokeValue.classList.add("w-90");
            categoryKey.classList.add("w-10", "bold", "blue");
            categoryValue.classList.add("w-90");


            jokeValue.innerText = element.joke;

            categoryValue.innerText = element.category


            jokeKey.innerText ="Joke:";

            categoryKey.innerText = "Category:"

            jokeWrapperChild.appendChild(jokeKey);
            jokeWrapperChild.appendChild(jokeValue);
            categoryWrapperChild.appendChild(categoryKey);
            categoryWrapperChild.appendChild(categoryValue);

            jokeWrapper.appendChild(jokeWrapperChild);
            jokeWrapper.appendChild(categoryWrapperChild);
            jokesElem.appendChild(jokeWrapper);

        });
    })

    .catch((e) => console.log(e));