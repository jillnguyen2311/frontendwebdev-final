fetch("https://opentdb.com/api_category.php")
        .then(response => response.json())
        .then(data => {
          const categories = data.trivia_categories;
          const selectList = document.getElementById("category-select");

          categories.forEach((category, index) => {
            const option = document.createElement("option");
            option.value = category.id;
            option.text = category.name;

            selectList.appendChild(option);
          });
        })
        .catch(error => console.log(error));