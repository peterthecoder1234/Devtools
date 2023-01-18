let catalogue = [
    {
        tag: "learning and practice",
        discription: "Curated leetcode with answer keys and explanations.",
        link: "#",
        link_text: "Neet Code"
    },
    {
        tag: "photos",
        discription: "Generic free images",
        link: "#",
        link_text: "Pixabay"
    }
];
// TEST SEARCH ENGINE // 
//input from the user
//let search = prompt('Enter what you would like to search for')

// iterate over the catalogue website info
catalogue.forEach(catalogueItem => {
    if (search === catalogueItem.tag) {
        console.log(catalogueItem)
    }
})