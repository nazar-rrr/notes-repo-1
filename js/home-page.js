const theBody = document.querySelector("body");
const theHomePage = document.querySelector(".home-page");
const theButton = document.querySelector(".home-page__button");

const toDoRendering = () => {
    const toDoHeading = document.createElement("div");
    toDoHeading.classList.add("todo-heading");
    toDoHeading.innerHTML = `
        <svg class="todo-page__heading--arrow" width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.02723e-07 17L27 2.27757L27 31.7224L2.02723e-07 17Z" fill="white" />
        </svg>
        <p class="todo-page__heading--article">To Do</p>
    `;
    theBody.appendChild(toDoHeading);
}

const toDoItemsRendering = () => {
    const toDoField = document.createElement("input");
    toDoField.setAttribute('type', 'text');
    toDoField.setAttribute('class', 'todo-field__article');
    theBody.appendChild(toDoField);
}

const toDoAddItemsRendering = () => {
    const toDoAddField = document.createElement("textarea");
    toDoAddField.setAttribute('type', 'text');
    toDoAddField.setAttribute('class', 'todo-field__add');
    toDoAddField.setAttribute('placeholder', '      Apply Text');
    toDoAddField.innerHTML = `
 Israel, a land steeped in history, spirituality, and conflict, occupies a pivotal position in the Middle East, both geographically and politically. From its ancient roots as a homeland for the Jewish people to its modern-day status as a vibrant and dynamic nation, Israel's story is one of resilience, innovation, and complexity.
 
 Historical Context:
 The history of Israel is deeply intertwined with its religious significance, particularly for Judaism, Christianity, and Islam. For Jews, Israel is the Promised Land, a sacred territory promised to them by God. It's the land of their ancestors, with Jerusalem as its eternal capital, holding deep religious and cultural significance.
 
 Throughout history, the region known today as Israel has been conquered and inhabited by various civilizations, including the ancient Egyptians, Canaanites, Israelites, Assyrians, Babylonians, Persians, Greeks, Romans, and Byzantines. Each left their mark on the land, shaping its culture, architecture, and society.
 
 Modern Israel:
 The modern state of Israel was established in 1948, following the end of British rule in Palestine and the United Nations' partition plan. Its creation was a response to centuries of persecution and the horrors of the Holocaust, providing a homeland for Jewish survivors and diaspora communities around the world.
 
 Since its founding, Israel has faced numerous challenges, including wars with its Arab neighbors, ongoing conflicts with the Palestinians, and geopolitical tensions in the region. Despite these challenges, Israel has thrived economically, technologically, and culturally, becoming known as the "Start-Up Nation" for its innovation and entrepreneurship.
 
 Society and Culture:
 Israeli society is diverse and multicultural, comprising Jews from various backgrounds (Ashkenazi, Sephardic, Mizrahi), Arabs (both Muslim and Christian), Druze, Bedouins, and other ethnic and religious minorities. This diversity is reflected in Israeli culture, which blends elements from Jewish, Arab, European, and Mediterranean traditions.
 
 Israeli cuisine, for example, is a fusion of flavors and influences, incorporating dishes from Jewish, Arab, and Mediterranean culinary traditions. Hummus, falafel, shawarma, and Israeli salad are just a few examples of beloved Israeli foods enjoyed by people of all backgrounds.
 
 Geopolitical Challenges:
 Despite its achievements, Israel remains embroiled in geopolitical challenges, particularly concerning its relationship with the Palestinian territories. The Israeli-Palestinian conflict, rooted in competing national narratives and territorial claims, has led to decades of violence, suffering, and diplomatic impasse.
 
 Key issues in the conflict include the status of Jerusalem, the borders of a future Palestinian state, Israeli settlements in the West Bank, security concerns, and the rights of Palestinian refugees. Efforts to resolve the conflict have been hindered by mistrust, extremism, and the absence of a viable peace process.
 
 International Relations:
 Israel's relations with the international community are complex and multifaceted. While it enjoys strong ties with the United States and several European countries, it faces hostility and diplomatic isolation in many parts of the world, particularly in the Arab and Muslim-majority countries.
 
 In recent years, Israel has expanded its diplomatic outreach, forging new partnerships with countries in Africa, Asia, and Latin America. These efforts aim to strengthen Israel's position on the global stage, promote economic cooperation, and counter diplomatic pressure from its adversaries.
 
 Future Prospects:
 The future of Israel is shaped by a delicate balance of hope and uncertainty. While it continues to face security threats and geopolitical challenges, it also possesses immense potential for growth, prosperity, and peace. Achieving a resolution to the Israeli-Palestinian conflict remains a paramount goal for Israelis, Palestinians, and the international community alike.
 
 Ultimately, the story of Israel is one of resilience, adaptation, and the enduring quest for peace and security in a troubled region. As it navigates the complexities of its past and present, Israel remains a beacon of hope and inspiration for its people and the world.</p>`
    theBody.appendChild(toDoAddField);
}

const removeHomePage = () => {
    theHomePage.remove();
}

const launchListeners = () => {
    removeHomePage();
    toDoRendering();
    for (let i = 0; i < 3; i++) {
        toDoItemsRendering();
    }
    toDoAddItemsRendering();
}

theButton.addEventListener("click", launchListeners);